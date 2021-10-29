import { Vector3 } from 'three'
import { Axis } from '../axis'
import { Note } from '../note'


export class AxesBehaviour {

    public name: string = ''

    public sF: number = 10

    public axis: Axis

    public min: number = 0
    public max: number = 1000

    public muted: boolean = false

    constructor(axis?: Axis) {

        this.axis = axis
    }

    public compute1DPosition(note: Note) {}

    public processAlongDimension(note: Note, position: Vector3) {}

}