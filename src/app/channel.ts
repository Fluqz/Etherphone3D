import { SoundEntity3D } from './sound-entity-3d';
import { Track } from './track';

export class Channel {
    
    public tracks: Track[] = []

    public currentTrack: Track

    public active: boolean = false

    public enabled: boolean = false

    constructor() {}

    
    

}