import { AxisBehaviour } from './axis-behaviour';
import { Note } from '../note';
import { SceneManager } from '../scene-manager';
import { Chord } from '../chord';
import { SoundEntity } from '../sound-entity';

export class VolumeShift extends AxisBehaviour {

    public sF: number = 100

    public axis: string 

    constructor(_axis: string = 'x' || 'y' || 'z') {super()
        
        this.axis = _axis
    }



    public updateSound(entity: SoundEntity, currentTime: number) {

        if(entity instanceof Note) {

            entity.volume = entity.position[this.axis] / this.sF

        }
        else if(entity instanceof Chord) {

            entity.notes.forEach(note => note.volume = note.position[this.axis] / this.sF)
        }

        // console.log('Volume', entity.gainNode.gain.value)
    }
}