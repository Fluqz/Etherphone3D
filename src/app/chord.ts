import { SoundEntity } from './sound-entity'
import { Note } from './note'
import { Vector3, Box3 } from 'three'
import { SceneManager } from './scene-manager'

export class Chord extends SoundEntity {
    

    public id: number
    public type: string

    public frequency: number

    public attack: number
    public release: number
    public sustain: number
    public volume: number

    public gainNode: GainNode

    public audioContext: AudioContext

    public position: Vector3

    public oscs: OscillatorNode[] = []

    public notes: Note[]

    constructor(_audioContext: AudioContext, _notes: Note[]) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.position = new Vector3()

        this.audioContext = _audioContext

        this.gainNode = this.audioContext.createGain()

        this.type = 'chord'

        this.notes = _notes

        _notes.forEach((note, i) => {

            note.gainNode.disconnect()

            note.gainNode.connect(this.gainNode)
        })

        this.gainNode.connect(this.audioContext.destination)

        this.gainNode.gain.value = this.volume = 1
        
        this.position.y = this.gainNode.gain.value
    }
    
    public getPosition() {

        this.notes.forEach(note => {


        })
    }

    public update() {}
}