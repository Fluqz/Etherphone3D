import { Theremin } from './theremin';
import { Object3D, PlaneBufferGeometry, ShaderMaterial, MeshPhongMaterial, Mesh, CircleBufferGeometry } from 'three';
import { Sound3D } from './sound-entity-3d';
import { Note3D } from './note3D';
import { Note } from './note';
import { Sound } from './sound-entity';
import { SceneManager } from '../scene-manager';
import { Chord3D } from './chord3D';
import { Chord } from './chord';
import { SnapToGrid } from '../tools/snap-to-grid';
import { Tools } from '../tools/tools';
import { Grid3D } from '../tools/labels/grid-3d';


export class Theremin3D {

    static instance: Theremin3D
    public theremin: Theremin

    public sounds3D: Sound3D[] = []
    public objs: Object3D[] = []

    public obj: Object3D

    public isPlaying: boolean = false

    constructor(ctrl: Theremin) {

        Theremin3D.instance = this

        this.theremin = ctrl

        this.obj = new Object3D()
        this.obj.name = 'theremin.3D'

        new SnapToGrid(1, 1, 1)

        // let geo = new CircleBufferGeometry(1000, 100)
        // let mat = new MeshPhongMaterial({
        //     color: 0xa3d1c2,
        //     reflectivity: 0
        // })
        // let mesh = new Mesh(geo, mat)
        // mesh.rotateX(-Math.PI / 2)

        // SceneManager.scene.add(mesh)

        ctrl.sounds.forEach((sound, i) => {

            if(sound instanceof Note) {

                let note = sound as Note

                this.sounds3D.push(new Note3D(note))

                this.objs.push(this.sounds3D[i].obj)
            }
        })

        // new Grid3D(this.theremin.X.max, 10, this.theremin.Y.max, 5)
    }


    public getNoteByObj(obj: Object3D) : Sound3D {
       
        for(let i = 0; i < this.sounds3D.length; i++) {

            if(this.sounds3D[i].obj === obj) {

                return this.sounds3D[i]
            }
        }

        return null
    }

    public getNoteByID(id: number) : Sound3D {
       
        for(let i = 0; i < this.sounds3D.length; i++) {

            if(this.sounds3D[i].ctrl.id === id) {

                return this.sounds3D[i]
            }
        }

        return null
    }

    public addSoungEntity3D(Sound: Sound) {

        let note = Sound as Note

        let note3D = new Note3D(note)

        this.sounds3D.push(note3D)

        this.objs.push(note3D.obj)

        return note3D
    }

    public groupNotesToChord(chord: Chord, _ses: Sound3D[]) : Chord3D {

        let chord3D = new Chord3D(chord, _ses)

        this.sounds3D.push(chord3D)

        this.objs.push(chord3D.obj)

        return chord3D
    }

    public ungroupNotes(_ses: Sound3D[], chord: Chord3D) {

        _ses.forEach(se => {

            if(se instanceof Note3D) {

                let note = (se as Note3D)

                if((note.ctrl as Note).isPartOfChord) {

                    chord.removeNote(note)
                }
            }
        })
    }

    public toggleOnOff() {

        this.isPlaying = !this.isPlaying

        this.theremin.toggleOnOff(this.isPlaying)
    }
}