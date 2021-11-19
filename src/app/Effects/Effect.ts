import { ToneAudioNode, ToneOscillatorOptions } from "tone";
import { Source } from "tone/build/esm/source/Source";
import * as Tone from 'tone'


export class Effect {

    node: Tone.Delay

    constructor(destination?) {

        this.node = new Tone.Delay(1)
    }


    
}