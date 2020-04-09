import { SoundEntity } from '../sound-entity'

export class AxisBehaviour {

    public sF: number

    public axis: string

    public min: number
    public max: number

    public muted: boolean

    public steps: number

    public updateSound(entity: SoundEntity) {

        console.log('Parent')
    }
}