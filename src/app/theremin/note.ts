import { Vector3, Color } from 'three'
import { Theremin } from './theremin'
import * as Tone from 'tone'
import { Tools } from '../tools/tools'
import { Effect } from './../Effects/Effect'
import { ThereminObject, TOType } from './ThereminObject'


export class Note extends ThereminObject {
    
    public osc: Tone.Oscillator

    public _frequency: number
    private _volume: number
    public _wave: OscillatorType


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

        this.gain.gain.setValueAtTime(val, Tone.context.currentTime)
    }

    public get wave() : OscillatorType { return this._wave }
    public set wave(val: OscillatorType) { 
        this._wave = val
        if(val && this.osc) this.osc.type = this._wave
    }

    constructor(frequency?: number) {
        super()

        this.type = TOType.NOTE

        this.frequency = frequency

        this.gain = new Tone.Gain(0)
        this.volume = 0
        this.gain.connect(Theremin.masterVolume)

        this.osc = new Tone.Oscillator(this.frequency)
        this.osc.connect(this.gain)

    }
    
    public play(length?: number) {

        super.play()

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

        super.stop()

        if(!this.osc) return

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, this.audioContext.currentTime + .03)

        this.osc.stop(Tone.context.currentTime + .03)
    }
    
    public mute() {

        super.mute()
    }

    public unmute() {

        super.unmute()

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

    public serializeIn(o: {}) {

        this.color.setHex(o['color'])
        this.frequency = o['frequency']
        this.volume = o['volume']
        this.wave = o['wave']
        this.position.set(o['position'].x, o['position'].y, o['position'].z)
    }

    
    public destroy() {

        window.setTimeout(()=> {

            this.osc.disconnect()
            this.osc = null
        }, 40)

        this.wave = null
        this._volume = null

        super.destroy()
    }
}