import { Vector3, Color } from 'three'

export abstract class Sound {

    public abstract id: number
    public abstract type: string

    public abstract parent: Sound

    public abstract audioContext: AudioContext
    public abstract gainNode: GainNode

    public abstract volume: number

    public abstract muted: boolean

    public abstract color: Color

    public abstract position: Vector3


    constructor( ) {

    }

    // public abstract set setVolume(volume: number)
    // public abstract set setFrequency(frequency: number)
    // public abstract set setAttack(attack: number)
    // public abstract set setSustain(sustain: number)
    // public abstract set setRelease(release: number)

    public update() {}
    public abstract mute()
    public abstract unmute()
    public abstract play()
    public abstract playFrequent(length:number)
    public abstract stop()
} 