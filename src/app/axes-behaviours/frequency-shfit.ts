import { AxesBehaviour } from './axes-behaviour'
import { Note } from '../theremin/note'
import { Chord } from '../theremin/chord'
import { Sound } from '../theremin/sound-entity'
import { NoteData, NoteDataClass } from "../data/frequency-of-notes"
import { Axis } from '../theremin/axis'

export class FrequencyShift extends AxesBehaviour {

    noteData: NoteData[] = []

    keydown:boolean = false

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Frequency Shift'

        this.sF = 10

        this.min = 0
        this.max = 2000

        this.muted = false


        window.addEventListener('keydown', this.onkeydown.bind(this))
        window.addEventListener('keyup', this.onkeyup.bind(this))
    }

    private onkeydown(e: KeyboardEvent) {
        if(e.key == 's') this.keydown = true
    }
    private onkeyup(e: KeyboardEvent) {
        if(e.key == 's') this.keydown = false
    }

    public snapToNote(frequency: number) : number {

        if(!this.keydown) return frequency

        let nearest: number = 1000
        let currentNote: NoteData

        NoteDataClass.data.forEach(data => {

            if(nearest > Math.abs(frequency - data.frequency)) {

                nearest = Math.abs(frequency - data.frequency)

                currentNote = data
            }
        })

        return currentNote.frequency
    }

    public updateSound(entity: Sound) {

        if(this.axis == null) return
        if(this.muted) return

        if(entity instanceof Note) {
            
            let note = entity as Note

            let frequency = Math.round((note.position[this.axis] * this.sF) * 100) / 100

            note.frequency = this.snapToNote(frequency)
        }
        else if(entity instanceof Chord) {

            let chord = entity as Chord

            let frequency

            chord.sounds.forEach(sound => {

                frequency = Math.round((sound.position[this.axis] * this.sF) * 100) / 100

                let note = sound as Note

                // note.frequency = this.snapToNearNote(frequency, 4)
                note.frequency = this.snapToNote(frequency)

            })
        }
    }
}