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

    public volume: GainNode

    public audioContext: AudioContext

    public position: Vector3

    public oscs: OscillatorNode[] = []

    public notes: Note[]

    constructor(_audioContext: AudioContext, _notes: Note[]) {
        super()

        this.id = Math.random() * 100 + new Date().getTime()

        this.position = new Vector3()

        this.audioContext = _audioContext

        this.volume = this.audioContext.createGain()
        this.volume.gain.value = 10 / SceneManager.sF

        this.type = 'chord'

        this.notes = _notes

        _notes.forEach((note, i) => {

            note.volume.disconnect()

            note.volume.connect(this.volume)
        })

        this.volume.connect(this.audioContext.destination)
    }
    
    public getPosition() {

        this.notes.forEach(note => {


        })
    }

    public update() {}
}