import { Vector3 } from 'three'

export abstract class Sound {

    public abstract id: number
    public abstract type: string

    public abstract frequency: number

    public abstract attack: number
    public abstract release: number
    public abstract sustain: number
    public abstract volume: number

    public abstract gainNode: GainNode

    public abstract audioContext: AudioContext

    public abstract position: Vector3

    public abstract muted: boolean


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
} 