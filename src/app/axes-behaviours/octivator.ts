import { AxesBehaviour } from './axes-behaviour';
import { Note } from '../theremin/note';
import { Sound } from '../theremin/sound-entity';
import { Chord } from '../theremin/chord';
import { Axis } from '../theremin/axis'
import { Theremin } from '../theremin/theremin';

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

    // Minus value go low, plus go high

    public updateSound(entity: Sound) {


        if(this.axis == null) return
        if(this.muted) return

        if(entity instanceof Note) {

            let count:number = Math.round(entity.position[this.axis] / this.sF)
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
                console.log('octivator', count, multipier * entity.frequency)

                let osc = Theremin.audioContext.createOscillator()
                // osc.type = node.wave
                // osc.type = 'sine'
                osc.connect(entity.gainNode)
                if(neg)
                    osc.frequency.setValueAtTime(entity.frequency / multipier, Theremin.audioContext.currentTime)
                else osc.frequency.setValueAtTime(multipier * entity.frequency, Theremin.audioContext.currentTime)

                osc.start()

                this.oscs.push(osc)
            }
        }
        else if(entity instanceof Chord) {

            entity.sounds.forEach(note => note.volume = Math.round((note.position[this.axis] / this.sF) * 100) / 100)
        }
    }

    private createOctave(frequency: number) {



    }
}