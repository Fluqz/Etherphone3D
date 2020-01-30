import { SoundEntity } from './sound-entity'
import { Vector3 } from 'three'
import { SceneManager } from './scene-manager'

export class Note extends SoundEntity{
    
    public id: number
    public type: string

    private _frequency: number

    private _attack: number
    private _release: number
    private _sustain: number
    public gainNode: GainNode

    public audioContext: AudioContext

    public position: Vector3

    public osc: OscillatorNode

    public get frequency() : number { return this._frequency }
    public set frequency(val: number) { console.log(val);this._frequency = val; this.osc.frequency.value = val }

    public get attack() : number { return this._attack }
    public set attack(val: number) { this._attack = val}

    public get release() : number { return this._release }
    public set release(val: number) { this._release = val}

    public get sustain() : number { return this._sustain }
    public set sustain(val: number) { this._sustain = val}

    public get volume() : number { return this.gainNode.gain.value }
    public set volume(val: number) { console.log(val); this.gainNode.gain.value = val }


    constructor(_audioContext: AudioContext, _frequency: number) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.audioContext = _audioContext
        this._frequency = _frequency

        this.type = 'Note'

        this.position = new Vector3(_frequency / SceneManager.sF, 10, 0)
        
        this.gainNode = this.audioContext.createGain()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = 'sine'
        this.osc.connect(this.gainNode)        
        this.gainNode.connect(this.audioContext.destination)

        this.osc.frequency.value = _frequency
        this.gainNode.gain.value = 10 / (SceneManager.sF / 2)

        this.osc.start(this.audioContext.currentTime)
    }

    public destroy() {

        this.osc.disconnect()

        this.gainNode.disconnect()
    }
}