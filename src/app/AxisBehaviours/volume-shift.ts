import { AxisBehaviour } from './axis-behaviour';
import { Note } from '../theremin/note';
import { Sound } from '../theremin/sound-entity';
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



    public updateSound(entity: Sound) {

        if(this.muted) return

        if(entity instanceof Note) {

            entity.volume = Math.round((entity.position[this.axis] / this.sF) * 100) / 100

        }
        else if(entity instanceof Chord) {

            entity.sounds.forEach(note => note.volume = Math.round((note.position[this.axis] / this.sF) * 100) / 100)
        }

        // console.log('Volume', entity.gainNode.gain.value)
    }
}