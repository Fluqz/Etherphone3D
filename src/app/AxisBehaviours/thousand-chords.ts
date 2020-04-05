import { AxisBehaviour } from './axis-behaviour'
import { Note } from '../note'
import { Chord } from '../chord'

export class ThousandChords extends AxisBehaviour {

    public sF: number = 0

    constructor() {super()}


    public updateSound(note: Note, currentTime: number) {

    }
}