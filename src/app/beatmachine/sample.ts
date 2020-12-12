import { Sound } from '../theremin/sound-entity'


export interface Sample {
 
    id: number

    sound: Sound

    scheduleTime: number

    length: number
}