import { Vector3 } from 'three'
import { Axis } from '../axis'
import { Note } from '../note'

export class Modulation {

    public axis: Axis
    public name:string

    public properties: {}[] = []

    public sF: number = 10
    public min: number = 0
    public max: number = 1000

    public muted: boolean = false

    constructor(axis?: Axis, min?:number, max?:number, sF?:number) {

        this.axis = axis
    }

    public compute1DPosition(note: Note) {}

    public processAlongDimension(note: Note, position: Vector3) {}

}