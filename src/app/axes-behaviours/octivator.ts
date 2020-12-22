import { AxesBehaviour } from './axes-behaviour';
import { Note } from '../theremin/note';
import { Axis } from '../theremin/axis'
import * as Tone from 'tone'
import { Vector3 } from 'three';

export class Octivator extends AxesBehaviour {

    private oscs: OscillatorNode[] = []

    private currentMultiplier: number

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Octivator'

        this.sF = 10

        this.min = 0
        this.max = 100

        this.muted = false
    }



    public compute1DPosition(note: Note) {

    }

    // Minus value go low, plus go high
    public processAlongDimension(note: Note, position: Vector3) {


        if(this.axis == null) return
        if(this.muted) return

        let count:number = Math.round(note.position[this.axis] / this.sF)
        let multipier:number = count +1

        count = Math.abs(count)

        // if(this.currentMultiplier == multipier) return

        this.currentMultiplier = multipier
        
        this.oscs.forEach(osc => {

            osc.stop()
            osc.disconnect()
        })
        this.oscs = []

        let neg: boolean = false
        if(multipier < 0) neg = true

        for(let i = 1; i <= count; i++) {

            let osc = Tone.context.createOscillator()
            // osc.type = node.wave
            // osc.type = 'sine'
            // osc.connect(entity.gain)
            // if(neg)
            //     osc.frequency.setValueAtTime(entity.frequency / multipier, Tone.context.currentTime)
            // else osc.frequency.setValueAtTime(multipier * entity.frequency, Tone.context.currentTime)

            osc.start()

            this.oscs.push(osc)
        }
    }

    private createOctave(frequency: number) {



    }
}