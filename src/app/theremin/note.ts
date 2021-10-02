import { Vector3, Color } from 'three'
import { Theremin } from './theremin'
import * as Tone from 'tone'
import { Tools } from '../tools/tools'
import { Effect } from './../Effects/Effect'


export class Note {
    
    public id: number
    public type: string

    public gain: Tone.Gain
    public osc: Tone.Oscillator

    public _frequency: number
    private _volume: number
    public _wave: OscillatorType

    public effectChain: Effect[] = []

    public isPlaying: boolean = false
    public muted: boolean = false

    public color: Color

    public position: Vector3

    public get frequency() { return this._frequency }
    public set frequency(val) { 

        if(val == null) return

        this._frequency = Math.abs(val)

        this.osc.frequency.setValueAtTime(this._frequency, Tone.context.currentTime)
    }

    public get volume() : number { return this._volume }
    public set volume(val: number) {
        if(val == null) return

        this._volume = Math.abs(val)

        this.gain.gain.value = val
    }

    public get wave() : OscillatorType { return this._wave }
    public set wave(val: OscillatorType) { 
        this._wave = val
        if(val && this.osc) this.osc.type = this._wave
    }

    constructor() {

        this.id = Tools.getUniqueID()
        this.type = 'note'
        this.color = new Color().setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

        this.gain = new Tone.Gain()
        this.volume = 0
        this.gain.connect(Theremin.masterVolume)

        this.osc = new Tone.Oscillator(this.frequency)
        this.osc.connect(this.gain)
        this.frequency = 0

        this.position = new Vector3(0, 0, 0)

        this.addEffect(new Effect())
    }

    public update() {

    }

    
    public addEffect(e: Effect) {

        if(this.effectChain.indexOf(e) == -1) return

        this.effectChain.push(e)

        for(e of this.effectChain) {

            this.osc.disconnect()
            this.osc.connect(e.node).connect(this.gain)
            e.node.connect(this.gain)
        }
    }
    
    public removeEffect(e: Effect) {

        let i = this.effectChain.indexOf(e)

        if(i == -1) return

        this.effectChain.splice(i, 1)
    }
    
    
    public play(length?: number) {

        this.isPlaying = true

        this.osc.stop(Tone.context.currentTime)
        this.osc.start(Tone.context.currentTime)

        // let convolver = reverb()

        // this.osc.connect(convolver)

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, length + .03)

        // this.osc.stop(Tone.context.currentTime + length + .03)

        if(length != undefined)
            this.osc.stop(Tone.context.currentTime + length)
    }

    public stop() {

        this.isPlaying = false

        if(!this.osc) return

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, this.audioContext.currentTime + .03)

        this.osc.stop(Tone.context.currentTime + .03)
    }
    
    public mute() {

        this.muted = true
    }

    public unmute() {

        this.muted = false

        this.gain.gain.setValueAtTime(this._volume, Tone.context.currentTime)
    }

    public serializeOut() {

        return {
            id: this.id,
            color: this.color.getHex(),
            frequency: this.frequency,
            volume: this.volume,
            wave: this.wave,
            position: this.position
        }
    }

    public serializeIn(obj: {}) {
        console.log('obj', obj)
        this.color.setHex(obj['color'])
        this.frequency = obj['frequency']
        this.volume = obj['volume']
        this.wave = obj['wave']
        this.position.set(obj['position'].x, obj['position'].y, obj['position'].z)
    }

    
    public destroy() {

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0000001, length + .03)

        window.setTimeout(()=> {

            this.osc.disconnect()
            this.osc = null
        }, 40)



        this.wave = null
        this._volume = null
        this.color = null
        this.position = null
        this.type = null
        this.id = null
        this.isPlaying = null
        this.muted = null
    }
}