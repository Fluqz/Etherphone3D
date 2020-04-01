import { SoundEntity } from './sound-entity'
import { Vector3 } from 'three'
import { SceneManager } from './scene-manager'
import { Theremin } from './theremin'
import { Theremin3D } from './theremin3D'

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

    public isPartOfChord: boolean = false

    public muted: boolean = false

    public get frequency() : number { return this._frequency }
    public set frequency(val: number) { this._frequency = val; this.osc.frequency.value = val }

    public get attack() : number { return this._attack }
    public set attack(val: number) { this._attack = val}

    public get release() : number { return this._release }
    public set release(val: number) { this._release = val}

    public get sustain() : number { return this._sustain }
    public set sustain(val: number) { this._sustain = val}

    public get volume() : number { return this.gainNode.gain.value }
    public set volume(val: number) { this.gainNode.gain.value = val }


    constructor(_audioContext: AudioContext, _frequency: number) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.audioContext = _audioContext
        this._frequency = _frequency

        this.type = 'Note'

        
        this.gainNode = this.audioContext.createGain()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = 'sine'
        this.osc.connect(this.gainNode)        
        this.gainNode.connect(this.audioContext.destination)

        this.osc.frequency.value = _frequency

        this.gainNode.gain.value = this.volume = .5

        this.osc.start(this.audioContext.currentTime)

        this.position = new Vector3(_frequency / Theremin.instance.X.sF, this.volume * Theremin.instance.Y.sF, 0)
    }

    public destroy() {

        this.osc.disconnect()

        this.gainNode.disconnect()
    }

    public play() {

        this.osc.start(this.audioContext.currentTime)
    }

    public stop() {

        this.osc.stop()
    }

    
    private storedVolume: number = 0
    public mute() {

        this.muted = true

        this.storedVolume = this.volume

        this.volume = 0
    }

    public unmute() {

        this.muted = false

        this.volume = this.storedVolume
    }
}