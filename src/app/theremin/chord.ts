import { Sound } from './sound-entity'
import { Note } from './note'
import { Vector3, Box3, Color } from 'three'
import { Theremin } from './theremin'

export class Chord extends Sound {
    

    public id: number
    public type: string

    public _frequency: number
    public _volume: number
    public _attack: number
    public _release: number
    public _sustain: number
    public color: Color

    public gainNode: GainNode

    public audioContext: AudioContext

    public position: Vector3

    public oscs: OscillatorNode[] = []

    public sounds: Sound[]

    public isPlaying: boolean = false
    public muted: boolean = false

    public parent: Sound

    public get frequency() : number { return this._frequency  } // RETURN MEDIAN OF ALL OSC FREQUENCIES
    public set frequency(val: number){ this._frequency = val } 

    public get attack() : number { return this._attack }
    public set attack(val: number) { this._attack = val}

    public get release() : number { return this._release }
    public set release(val: number) { this._release = val}

    public get sustain() : number { return this._sustain }
    public set sustain(val: number) { this._sustain = val}

    public get volume() : number { return this.gainNode.gain.value }
    public set volume(val: number) { 

        
    }

    constructor(_sounds: Sound[]) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.position = new Vector3()

        this.audioContext = Theremin.audioContext

        this.gainNode = this.audioContext.createGain()

        this.type = 'chord'

        this.sounds = _sounds

        this.parent = null

        _sounds.forEach((sound, i) => {

            sound.gainNode.disconnect()

            sound.gainNode.connect(this.gainNode)
        })

        this.gainNode.connect(this.audioContext.destination)

        this.volume = 1 // VOLUME EQUALS THE INITIAL Y POSITION OF 3D OBJ
        
        this.position.y = this.gainNode.gain.value * Theremin.instance.X.sF
    }
    
    public update() {}

    public play() {

        this.isPlaying = true

        this.sounds.forEach(sound => {

            sound.play()
        })
    }
    
    public playFrequent(length: number) {

        this.isPlaying = false

        this.sounds.forEach(sound => {

            sound.playFrequent(length)
        })
    }

    public stop() {

        this.isPlaying = false

        this.sounds.forEach(sound => {

            sound.stop()
        })
    }
    
    public mute() {

        this.muted = true

        this.gainNode.gain.value = 0
    }

    public unmute() {

        this.muted = false

        this.gainNode.gain.value = 1
    }
}