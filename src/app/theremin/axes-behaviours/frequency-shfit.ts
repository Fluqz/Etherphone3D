import { Modulation } from './modulation'
import { Note } from '../note'
import { NoteData, NoteDataClass } from "../../data/frequency-of-notes"
import { Axis } from '../axis'
import { Vector3 } from 'three'

export class FrequencyShift extends Modulation {

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
        if(e.repeat) return
        if(e.key == 's') this.keydown = true
    }
    private onkeyup(e: KeyboardEvent) {
        if(e.key == 's') this.keydown = false
    }

    public snapToNote(frequency: number) : number {

        if(!this.keydown) return frequency

        let nearest: number = 1000
        let currentNote: NoteData

        for(let data of NoteDataClass.data) {

            if(nearest > Math.abs(frequency - data.frequency)) {

                nearest = Math.abs(frequency - data.frequency)

                currentNote = data
            }
        }

        return currentNote.frequency
    }





    
    public compute1DPosition(note: Note) {

        note.position[this.axis] = note.frequency / this.sF
    }

    public processAlongDimension(note: Note, position: Vector3) {

        if(this.axis == null) return
        if(this.muted) return

        let frequency = Math.round((position[this.axis] * this.sF) * 100) / 100

        note.frequency = this.snapToNote(frequency)
    }
}