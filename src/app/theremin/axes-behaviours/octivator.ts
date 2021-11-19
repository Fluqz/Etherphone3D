import { Modulation } from './modulation';
import { Note } from '../note';
import { Axis } from '../axis'
import { Vector3 } from 'three';
import { BeatMachine } from 'src/app/beatmachine/beat-machine';

export class Octivator extends Modulation {

    private octaves: Map<number, Note> = new Map<number, Note>()
    private octave: Note

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

        this.octave = this.getOctave(note)

        note.position[this.axis] = ((this.octave.frequency as number) / this.sF) / this.octaveFactor 
    }

    // Minus value go low, plus go high
    public processAlongDimension(note: Note, position: Vector3) {

        if(this.muted) return

        this.octave = this.getOctave(note)

        let frequency = Math.abs(((position[this.axis] * this.sF)))
        frequency *= this.octaveFactor

        this.octave.frequency = frequency

        if(BeatMachine.isPlaying) {

            BeatMachine.onTrigger.subscribe(_sample => {

                if(note == _sample.note) this.octave
            })            
        }
        else {
            
            this.octave.play()
        }

    }


    private getOctave(note: Note) : Note {

        let oct: Note = this.octaves.get(note.id)
        if(!oct) {

            oct = new Note()
            // oct.connect(note.gain)

            this.octaves.set(note.id, oct)
        }

        if(oct.wave != note.wave) oct.wave = note.wave
        oct.volume = note.volume

        return oct
    }    
}