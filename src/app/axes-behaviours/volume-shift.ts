import { AxesBehaviour } from './axes-behaviour';
import { Note } from '../theremin/note';
import { Axis } from '../theremin/axis'
import { Vector3 } from 'three';

export class VolumeShift extends AxesBehaviour {

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Volume Shift'

        this.sF = 100

        this.min = 0
        this.max = 100

        this.muted = false
    }



    public compute1DPosition(note: Note) {

        if(note instanceof Note) 
            note.position[this.axis] = note.volume * this.sF
    }

    public processAlongDimension(note: Note, position: Vector3) {

        if(this.axis == null) return
        if(this.muted) return
        
        note.volume = position[this.axis] / this.sF
    }
}