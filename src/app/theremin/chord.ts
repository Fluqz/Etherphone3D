
import { Color, Vector3 } from 'three'
import * as Tone from 'tone'
import { Tools } from '../tools/tools'
import { Note } from './note'




export class Chord {
  
    public id: number
    public type: string

    public notes: Note[] = []

    public gain: Tone.Gain

    public color: Color

    public position: Vector3


    constructor(_notes?: Note[]) {

        this.id = Tools.getUniqueID()

        this.type = 'chord'

        this.notes = _notes
    }

    
}