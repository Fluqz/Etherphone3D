import { Sound } from './sound-entity'
import { Vector3, Color } from 'three'
import { SceneManager } from '../scene-manager'
import { Theremin } from './theremin'
import { Theremin3D } from './theremin3D'

export class Note extends Sound{
    
    public id: number
    public type: string

    private _frequency: number
    private _volume: number

    private _attack: number
    private _release: number
    private _sustain: number
    public gainNode: GainNode
    public color: Color

    public audioContext: AudioContext

    public position: Vector3

    public osc: OscillatorNode

    public parent: Sound
    
    public isPlaying: boolean = false
    public muted: boolean = false

    public get frequency() : number { return this._frequency }
    public set frequency(val: number) { 
        this._frequency = val; 
        this.osc.frequency.setValueAtTime(val, this.audioContext.currentTime)
    }

    public get attack() : number { return this._attack }
    public set attack(val: number) { this._attack = val}

    public get release() : number { return this._release }
    public set release(val: number) { this._release = val}

    public get sustain() : number { return this._sustain }
    public set sustain(val: number) { this._sustain = val}

    public get volume() : number { return this.gainNode.gain.value }
    public set volume(val: number) { 
        this._volume = val
        this.gainNode.gain.value = val
    }


    constructor(_frequency: number) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.audioContext = Theremin.audioContext
        this._frequency = _frequency

        this.type = 'note'

        this.parent = null
        
        this.gainNode = this.audioContext.createGain()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = 'sine'
        this.osc.connect(this.gainNode)
        this.gainNode.connect(this.audioContext.destination)

        this.osc.frequency.value = _frequency

        this.volume = .25

        // this.isPlaying = true
        // this.osc.start(this.audioContext.currentTime)

        this.position = new Vector3(_frequency / Theremin.instance.X.sF, this.volume * Theremin.instance.Y.sF, 0)
    }

    public destroy() {

        this.osc.disconnect()

        this.gainNode.disconnect()
    }
    
    private storedVolume: number = 0

    public play() {

        this.isPlaying = true

        this.osc.stop()
    }
    
    public playFrequent(length: number) {

        this.osc.disconnect()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = 'sine'
        this.osc.connect(this.gainNode)
        Theremin.instance.updateSound(this)

        this.isPlaying = true

        // this.gainNode.gain.cancelScheduledValues(Theremin.audioContext.currentTime)
        // this.gainNode.gain.setValueAtTime(0, Theremin.audioContext.currentTime)
        // set our attack
        // this.gainNode.gain.linearRampToValueAtTime(1, Theremin.audioContext.currentTime + attackTime);
        // set our release
        // this.gainNode.gain.linearRampToValueAtTime(0, Theremin.audioContext.currentTime + sweepLength - releaseTime);

        this.osc.start(this.audioContext.currentTime)

        console.log('Note.PlayFrequent', this.audioContext.currentTime, length)

        this.osc.stop(length+.4)
    }

    public stop() {

        this.isPlaying = false

        this.osc.start()
    }
    
    public mute() {

        this.muted = true

        this.osc.stop()
    }

    public unmute() {

        this.muted = false

        this.osc.start()
    }
}