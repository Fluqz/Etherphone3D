import { Color, Vector3 } from "three"
import * as Tone from "tone"
import { Effect } from "../Effects/Effect"
import { Tools } from "../tools/tools"
import { Modulation } from "./axes-behaviours/modulation"
import { Theremin } from "./theremin"

export enum TOType {

    NOTE = 'Note',
    CHORD = 'Chord'
}

export class ThereminObject {

    public id: number
    public type: TOType

    public gain: Tone.Gain
    
    public modulations: { type: Modulation, prop: string }[] = []

    public isPlaying: boolean = false
    public muted: boolean = false

    public color: Color

    public position: Vector3


    constructor() {

        this.id = Tools.getUniqueID()
        this.color = new Color().setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

        this.position = new Vector3()

        // this.addEffect(new Effect())
    }

    addModulation() {

        // this.modulations.push({
        //     type: ,
        //     prop: 
        // })
    }

    public update() {

    }

    
    public play(length?: number) {

        this.isPlaying = true
    }

    public stop() {

        this.isPlaying = false
    }
    
    public mute() {

        this.muted = true
    }

    public unmute() {

        this.muted = false
    }

    public serializeOut() {

        return {
            id: this.id,
            color: this.color.getHex(),
            position: this.position
        }
    }

    public serializeIn(o: {}) {

        this.color.setHex(o['color'])
        this.position.set(o['position'].x, o['position'].y, o['position'].z)
    }

    
    public destroy() {

        this.stop()

        this.color = null
        this.position = null
        this.id = null
        this.isPlaying = null
        this.muted = null
    }
}