import { AxesBehaviour } from './axes-behaviour';
import { Note } from '../theremin/note';
import { Axis } from '../theremin/axis'
import * as Tone from 'tone'
import { Vector3 } from 'three';

export class Octivator extends AxesBehaviour {

    private oscs: Map<number, Tone.Oscillator> = new Map<number, Tone.Oscillator>()
    private osc: Tone.Oscillator

    private octaveFactor:number = 2

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Octivator'

        this.sF = 10

        this.min = 0
        this.max = 100

        this.muted = false
    }

    public compute1DPosition(note: Note) {

        this.osc = this.getOctave(note)

        note.position[this.axis] = ((this.osc.frequency.value as number) / this.sF) / this.octaveFactor 
    }

    // Minus value go low, plus go high
    public processAlongDimension(note: Note, position: Vector3) {

        if(this.muted) return

        this.osc = this.getOctave(note)

        let frequency = Math.abs(((position[this.axis] * this.sF)))
        frequency *= this.octaveFactor

        this.osc.frequency.setValueAtTime(frequency, Tone.context.currentTime)
        this.osc.start()
    }


    private getOctave(note: Note) : Tone.Oscillator {

        let osc: Tone.Oscillator = this.oscs.get(note.id)
        if(!osc) {

            osc = new Tone.Oscillator(0)
            osc.connect(note.gain)

            this.oscs.set(note.id, osc)
        }

        if(osc.type != note.osc.type) osc.type = note.osc.type
        osc.volume.setValueAtTime(note.osc.volume.value, Tone.context.currentTime)

        return osc
    }    
    
}