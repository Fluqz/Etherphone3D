import { AppComponent } from './app.component'
import { Vector3 } from 'three'

export abstract class SoundEntity {

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

    public update() {}
    public abstract mute()
    public abstract unmute()
} 