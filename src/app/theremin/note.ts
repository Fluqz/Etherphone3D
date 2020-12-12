import { Sound } from './sound-entity'
import { Vector3, Color, ReverseSubtractEquation } from 'three'
import { Theremin } from './theremin'

import '../effects/effects'
import { reverb } from '../effects/effects'

export class Note extends Sound{
    
    public id: number
    public type: string

    public parent: Sound

    public audioContext: AudioContext
    public gainNode: GainNode
    public osc: OscillatorNode

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
        this.gainNode.gain.setValueAtTime(val, this.audioContext.currentTime)
    }


    constructor(context: AudioContext) {
        super()

        this.audioContext = context

        this.id = Math.random() * 100 + new Date().getTime()
        this.type = 'note'
        this.parent = null

        this.gainNode = this.audioContext.createGain()

        this.osc = this.audioContext.createOscillator()
        this.osc.type = 'sine'
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

        this.osc.disconnect()

        this.gainNode.disconnect()
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
        this.osc.type = 'sine'
        this.osc.connect(this.gainNode)
        Theremin.instance.updateSound(this)

        this.osc.start(this.audioContext.currentTime)

        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, length + .03)

        this.osc.stop(length + .03)
    }

    public stop() {

        this.isPlaying = false

        if(!this.osc) return

        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)

        this.gainNode.gain.exponentialRampToValueAtTime(.0001, this.audioContext.currentTime + .03)

        this.osc.stop(this.audioContext.currentTime + .03)
    }
    
    public mute() {

        this.muted = true

        this.osc.stop()
    }

    public addReverb() {

    }

    public unmute() {

        this.muted = false

        this.osc.start()
    }
}