import { AxisBehaviour } from './axis-behaviour';
import { Note } from '../theremin/note';
import { SoundEntity } from '../theremin/sound-entity';
import { Chord } from '../theremin/chord';

export class VolumeShift extends AxisBehaviour {

    public sF: number = 100

    public axis: string 

    public steps: number = 0
    public min: number = 0
    public max: number = 100

    public muted: boolean = false

    constructor(_axis: string = 'x' || 'y' || 'z') { super()
        
        this.axis = _axis
    }



    public updateSound(entity: SoundEntity) {

        if(this.muted) return

        if(entity instanceof Note) {

            entity.volume = entity.position[this.axis] / this.sF

        }
        else if(entity instanceof Chord) {

            entity.notes.forEach(note => note.volume = note.position[this.axis] / this.sF)
        }

        // console.log('Volume', entity.gainNode.gain.value)
    }
}