import { Theremin } from './theremin';
import { Object3D, PlaneBufferGeometry, ShaderMaterial, MeshPhongMaterial, Mesh, CircleBufferGeometry, Vector3 } from 'three';
import { Note3D } from './note3D';
import { Note } from './note';
import { SceneManager } from '../scene-manager';


export class Theremin3D {

    public theremin: Theremin

    public notes3D: Note3D[] = []
    public objs: Object3D[] = []

    public obj: Object3D

    constructor(ctrl: Theremin) {

        this.theremin = ctrl

        this.obj = new Object3D()
        this.obj.name = 'theremin.3D'
        this.obj.matrixAutoUpdate = false

        this.theremin.notes.forEach(note3D => {

            this.addNote3D(note3D)
        })
    }


    public update() {

        // for(let note3D of this.notes3D) { 
         
        //     note3D.update()
        // }
    }

    public static moveNote(note3D: Note3D, position: Vector3) {

        Theremin.computeFromPosition(note3D.ctrl, position)

        note3D.update()
    }


    public getNoteByObj(obj: Object3D) : Note3D {
       
        for(let i = 0; i < this.notes3D.length; i++) {

            if(this.notes3D[i].obj === obj) {

                return this.notes3D[i]
            }
        }

        return null
    }

    public getNoteByID(id: number) : Note3D {
       
        for(let i = 0; i < this.notes3D.length; i++) {

            if(this.notes3D[i].ctrl.id === id) {

                return this.notes3D[i]
            }
        }

        return null
    }

    getNote3D(note: Note) : Note3D {

        for(let n of this.notes3D) {

            if(note == n.ctrl) return n
        }
        return null
    }

    public addNote3D(note: Note) : Note3D {

        let note3D = new Note3D(note)

        this.notes3D.push(note3D)

        this.objs.push(note3D.obj)

        SceneManager.scene.add(note3D.obj)

        return note3D
    }

    public removeNote3D(note3D: Note3D) : boolean {

        if(!note3D) return false

        let i = this.notes3D.indexOf(note3D)

        if(i != -1) {

            this.notes3D.splice(i, 1)
            if(note3D.obj.parent) note3D.obj.parent.remove(note3D.obj)
            note3D.destroy()
            return true
        }

        return false
    }
    
    // public groupNotesToChord(chord: Chord, _ses: Note3D[]) : Chord3D {

    //     let chord3D = new Chord3D(chord, _ses)

    //     this.notes3D.push(chord3D)

    //     this.objs.push(chord3D.obj)

    //     return chord3D
    // }

    // public ungroupNotes(_ses: Note3D[], chord: Chord3D) {

    //     _ses.forEach(se => {

    //         if(se instanceof Note3D) {

    //             let note = (se as Note3D)

    //             if((note.ctrl as Note).parent) {

    //                 chord.removeNote(note)
    //             }
    //         }
    //     })
    // }

    public reset() {

        let note3Ds: Note3D[] = []
        this.notes3D.forEach(note3D => { note3Ds.push(note3D)})
        note3Ds.forEach(note3D => {
            this.removeNote3D(note3D)
        })
    }
}
