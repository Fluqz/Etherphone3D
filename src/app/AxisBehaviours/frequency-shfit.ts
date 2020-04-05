import { AxisBehaviour } from './axis-behaviour'
import { Note } from '../note'
import { Chord } from '../chord'
import { SceneManager } from '../scene-manager'
import { SoundEntity } from '../sound-entity'

export class FrequencyShift extends AxisBehaviour {

    public sF: number = 10

    public axis: string 

    constructor(_axis: string = 'x' || 'y' || 'z') {super()
        
        this.axis = _axis
    }



    public updateSound(entity: SoundEntity, currentTime: number) {

        if(entity instanceof Note) {
            
            let note = entity as Note

            note.frequency = note.position[this.axis] * this.sF

            // console.log('Frequency', note.frequency)
            
        }
        else if(entity instanceof Chord) {

            let chord = entity as Chord

            chord.notes.forEach(note => {

                note.frequency = note.position[this.axis] * this.sF

                // console.log('Frequency ' + note.id , note.frequency)
            })
        }
    }
}