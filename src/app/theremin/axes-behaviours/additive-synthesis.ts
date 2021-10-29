import { AxesBehaviour } from './axes-behaviour'
import { Axis } from '../axis'
import { Note } from 'tone/build/esm/core/type/Units'

export class AdditiveSynthesis extends AxesBehaviour {

    private oscs: OscillatorNode[] = []

    constructor(axis?: Axis) { 
        
        super(axis)
        
        this.name = 'Additive Synthesis'

        this.sF = 10
        
        this.min = 0
        this.max = 2000

        this.muted = false
    }
}