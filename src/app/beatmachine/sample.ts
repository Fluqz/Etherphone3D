import { Sound3D } from '../theremin/sound-entity-3d'


export interface Sample {
 
    id: number

    sound: Sound3D

    scheduleTime: number

    length: number
}