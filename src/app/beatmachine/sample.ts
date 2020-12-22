import { Note3D } from "../theremin/note3D";

export interface Sample {
 
    id: number

    note: Note3D

    scheduleTime: number

    length: number
}