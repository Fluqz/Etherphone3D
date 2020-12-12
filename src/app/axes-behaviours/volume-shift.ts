import { AxesBehaviour } from './axes-behaviour';
import { Note } from '../theremin/note';
import { Sound } from '../theremin/sound-entity';
import { Chord } from '../theremin/chord';
import { Axis } from '../theremin/axis'

export class VolumeShift extends AxesBehaviour {

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Volume Shift'

        this.sF = 100

        this.min = 0
        this.max = 100

        this.muted = false
    }



    public updateSound(entity: Sound) {

        if(this.axis == null) return
        if(this.muted) return

        if(entity instanceof Note) {

            entity.volume = entity.position[this.axis] / this.sF

        }
        else if(entity instanceof Chord) {

            entity.sounds.forEach(note => note.volume = Math.round((note.position[this.axis] / this.sF) * 100) / 100)
        }
    }
}