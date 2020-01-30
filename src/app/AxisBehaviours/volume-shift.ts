import { AxisBehaviour } from './axis-behaviour';
import { Note } from '../note';
import { SceneManager } from '../scene-manager';
import { Chord } from '../chord';
import { SoundEntity } from '../sound-entity';

export class VolumeShift extends AxisBehaviour {

    constructor() {super()}

    public updateNote(entity: SoundEntity, currentTime: number) {

        if(entity instanceof Note) {

            entity.volume = entity.position.y / SceneManager.sF

            entity.gainNode.gain.value = entity.volume
        }
        else if(entity instanceof Chord) {

            entity.volume = 1

            entity.gainNode.gain.value = entity.volume
        }

        console.log('Volume', entity.gainNode.gain.value)
    }
}