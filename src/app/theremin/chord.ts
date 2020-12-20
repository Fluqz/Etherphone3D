import { Sound } from './sound-entity'
import { Note } from './note'
import { Vector3, Box3, Color } from 'three'
import { Theremin } from './theremin'

export class Chord extends Sound {
    

    public id: number
    public type: string

    public parent: Sound

    public sounds: Sound[]

    public audioContext: AudioContext
    public oscs: OscillatorNode[] = []
    public gainNode: GainNode

    public isPlaying: boolean = false
    public muted: boolean = false

    public position: Vector3
    public color: Color

    public get volume() : number { return this.gainNode.gain.value }
    public set volume(val: number) { 
        this.gainNode.gain.value = val        
    }

    constructor(_sounds: Sound[], context: AudioContext) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.position = new Vector3()

        this.audioContext = context

        this.gainNode = this.audioContext.createGain()

        this.type = 'chord'

        this.sounds = _sounds

        this.parent = null

        _sounds.forEach((sound, i) => {

            sound.gainNode.disconnect()

            sound.gainNode.connect(this.gainNode)
        })

        this.gainNode.connect(Theremin.masterVolume)

        this.volume = 1 // VOLUME EQUALS THE INITIAL Y POSITION OF 3D OBJ
        
        // this.position.y = this.gainNode.gain.value * Theremin.instance.X.sF
    }
    
    public update() {}

    public play() {

        this.isPlaying = true

        this.sounds.forEach(sound => {

            sound.play()
        })
    }
    
    public playFrequent(length: number) {

        this.isPlaying = true

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


    public destroy() {
    
    }

    public serializeOut() {

        let sounds: {}[] = []
        this.sounds.forEach(sound => {

            sounds.push(sound.serializeOut())
        })

        return {
            id: this.id,
            color: this.color.getHex(),
            volume: this.volume,
            position: this.position,
            sounds: sounds,
            parent: this.parent
        }
    }

    public serializeIn(file: {}) {


    }
}