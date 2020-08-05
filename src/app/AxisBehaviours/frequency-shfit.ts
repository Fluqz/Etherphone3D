import { AxisBehaviour } from './axis-behaviour'
import { Note } from '../theremin/note'
import { Chord } from '../theremin/chord'
import { Sound } from '../theremin/sound-entity'

export class FrequencyShift extends AxisBehaviour {

    public sF: number = 10

    public axis: string 

    public steps: number
    public min: number = 0
    public max: number = 2000

    public muted: boolean = false

    constructor(_axis: string = 'x' || 'y' || 'z') { super()
        
        this.axis = _axis
    }



    public updateSound(entity: Sound) {

        if(this.muted) return

        if(entity instanceof Note) {
            
            let note = entity as Note

            note.frequency = Math.round((note.position[this.axis] * this.sF) * 100) / 100
        }
        else if(entity instanceof Chord) {

            let chord = entity as Chord

            chord.sounds.forEach(note => {

                note.frequency = Math.round((note.position[this.axis] * this.sF) * 100) / 100
            })
        }
        console.log('Frequency', entity.frequency)
    }
}