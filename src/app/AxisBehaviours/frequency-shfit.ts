import { AxisBehaviour } from './axis-behaviour'
import { Note } from '../theremin/note'
import { Chord } from '../theremin/chord'
import { Sound } from '../theremin/sound-entity'
import { NoteData, NoteDataClass } from "../data/frequency-of-notes"

export class FrequencyShift extends AxisBehaviour {

    noteData: NoteData[] = []

    public sF: number = 10

    public axis: string 

    public steps: number
    public min: number = 0
    public max: number = 2000

    public muted: boolean = false

    constructor(_axis: string = 'x' || 'y' || 'z') { super()
        
        this.axis = _axis
        
    }

    // MOVE THIS TO NOTE.MOVE() ????
    public snapToNearNote(frequency: number, offset:number) : number {

        NoteDataClass.data.forEach(data => {

            if(Math.abs(frequency - data.frequency) <= offset) {

                frequency = data.frequency
                console.log('NOTE ', data.note, frequency)
            }
        })

        return frequency
    }
    public snapToNote(frequency: number) : number {

        let nearest: number = 1000
        let currentNote: NoteData

        NoteDataClass.data.forEach(data => {

            if(nearest > Math.abs(frequency - data.frequency)) {

                nearest = Math.abs(frequency - data.frequency)

                currentNote = data
            }
        })

        console.log('NOTE ', currentNote.note, frequency)

        return currentNote.frequency
    }

    public updateSound(entity: Sound) {

        if(this.muted) return

        if(entity instanceof Note) {
            
            let note = entity as Note

            let frequency = Math.round((note.position[this.axis] * this.sF) * 100) / 100

            // note.frequency = this.snapToNearNote(frequency, 4)
            note.frequency = this.snapToNote(frequency)

        }
        else if(entity instanceof Chord) {

            let chord = entity as Chord

            let frequency

            chord.sounds.forEach(note => {

                frequency = Math.round((note.position[this.axis] * this.sF) * 100) / 100

                // note.frequency = this.snapToNearNote(frequency, 4)
                note.frequency = this.snapToNote(frequency)

            })
        }
    }
}