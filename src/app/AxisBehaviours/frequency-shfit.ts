import { AxisBehaviour } from './axis-behaviour'
import { Note } from '../note'
import { Chord } from '../chord'
import { SceneManager } from '../scene-manager'
import { SoundEntity } from '../sound-entity'

export class FrequencyShift extends AxisBehaviour {


    constructor() {super()}


    public updateNote(entity: SoundEntity, currentTime: number) {

        if(entity instanceof Note) {
            
            let note = entity as Note

            note.frequency = note.position.x * SceneManager.sF

            note.osc.frequency.setValueAtTime(note.frequency, currentTime)

        }
        else if(entity instanceof Chord) {

            let chord = entity as Chord

            chord.notes.forEach(note => {

                note.frequency = note.position.x * SceneManager.sF

                note.osc.frequency.setValueAtTime(note.frequency, currentTime)

                console.log('Frequency ' + note.id , note.frequency)
            })
        }
    }
}