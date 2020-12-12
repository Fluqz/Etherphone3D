import { Axis } from '../theremin/axis'
import { Sound } from '../theremin/sound-entity'


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

    public updateSound(entity: Sound) {

        console.log('Parent')
    }
}