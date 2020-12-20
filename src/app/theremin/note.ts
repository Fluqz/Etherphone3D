import { Sound } from './sound-entity'
import { Vector3, Color } from 'three'
import { Theremin } from './theremin'
import { NullTemplateVisitor } from '@angular/compiler'

export class Note extends Sound{
    
    public id: number
    public type: string

    public parent: Sound

    public audioContext: AudioContext
    public gainNode: GainNode
    public osc: OscillatorNode
    public _wave: OscillatorType

    private _volume: number

    public isPlaying: boolean = false
    public muted: boolean = false

    public color: Color

    public position: Vector3

    public get frequency() : number { return this.osc.frequency.value }
    public set frequency(val: number) { 
        this.osc.frequency.setValueAtTime(val, this.audioContext.currentTime)
    }

    public get volume() : number { return this.gainNode.gain.value }
    public set volume(val: number) {
        this._volume = val
        this.gainNode.gain.setValueAtTime(val, this.audioContext.currentTime)
    }

    public get wave() : OscillatorType { return this._wave }
    public set wave(val: OscillatorType) { 
        this._wave = val
        if(val && this.osc) this.osc.type = this._wave
    }

    constructor(context: AudioContext) {
        super()

        this.audioContext = context

        this.id = Math.random() * 100 + new Date().getTime()
        this.type = 'note'
        this.parent = null
        this.color = new Color().setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

        this.gainNode = this.audioContext.createGain()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = this.wave = 'sine'
        this.osc.connect(this.gainNode)
        this.gainNode.connect(this.audioContext.destination)

        this.volume = .25

        this.frequency = 0

        this.position = new Vector3(0, 0, 0)
    }

    // public createOsc() {

    //     this.gainNode = this.audioContext.createGain()

    //     this.osc = this.audioContext.createOscillator()
    //     this.osc.type = 'sine'
    //     this.osc.connect(this.gainNode)
    //     this.gainNode.connect(this.audioContext.destination)

    //     this.osc.frequency.value = this._frequency

    //     this.volume = this.volume

    //     this.position = new Vector3(_frequency / Theremin.instance.X.sF, this.volume * Theremin.instance.Y.sF, 0)
    // }

    public destroy() {

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0000001, length + .03)

        window.setTimeout(()=> {

            this.osc.disconnect()
            this.gainNode.disconnect()
            
            this.gainNode = null
            this.osc = null
        }, 40)



        this.wave = null
        this._volume = null
        this.color = null
        this.parent = null
        this.position = null
        this.type = null
        this.id = null
        this.isPlaying = null
        this.muted = null
    }
    
    public play() {

        this.isPlaying = true

        // let convolver = reverb()

        // this.osc.connect(convolver)

        this.osc.start()
    }
    
    public playFrequent(length: number) {

        this.isPlaying = true

        this.osc.disconnect()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = this.wave
        this.osc.connect(this.gainNode)
        Theremin.instance.updateSound(this)

        this.osc.start(this.audioContext.currentTime)

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, length + .03)

        this.osc.stop(this.audioContext.currentTime + length + .03)
    }

    public stop() {

        this.isPlaying = false

        if(!this.osc) return

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, this.audioContext.currentTime + .03)

        this.osc.stop(this.audioContext.currentTime + .03)
    }
    
    public mute() {

        this.muted = true

        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        this.gainNode.gain.exponentialRampToValueAtTime(.0001, this.audioContext.currentTime + .03)
    }

    public addReverb() {

    }

    public unmute() {

        this.muted = false

        this.gainNode.gain.setValueAtTime(this._volume, this.audioContext.currentTime)
    }

    public serializeOut() {

        return {
            id: this.id,
            color: this.color.getHex(),
            frequency: this.frequency,
            volume: this.volume,
            wave: this.wave,
            position: this.position,
            parent: this.parent
        }
    }

    public serializeIn(obj: {}) {

        this.id = obj['id']
        this.color.setHex(obj['color'])
        this.frequency = obj['frequency']
        this.volume = obj['volume']
        this.wave = obj['wave']
        this.position.set(obj['position']['x'], obj['position']['y'], obj['position']['z'])
        this.parent = null
    }
}