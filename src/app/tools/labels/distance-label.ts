import { SceneManager } from '../../scene-manager';
import { Label } from './label';

import * as THREE from 'three'
import { SoundEntity3D } from '../../theremin/sound-entity-3d';

export class DistanceLabel {

    private SE: SoundEntity3D

    private raycaster: THREE.Raycaster

    private start: THREE.Vector3
    private end: THREE.Vector3

    public labels: Label[] = []

    public obj: THREE.Object3D

    private _enabled: boolean = false

    private sides: string[] = ['top', 'bottom', 'left', 'right', 'front', 'back']
    private pairs: string[][] = [
        ['top', 'bottom'],
        ['left', 'right'],
        ['front', 'back'],
    ]



    constructor(_SE: SoundEntity3D) {

        this.SE = _SE

        this.raycaster = new THREE.Raycaster()
        this.raycaster.near = .001
        this.raycaster.far = 1000

        this.createLabel()

        SceneManager.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false)
    }



    public get enabled() { return this._enabled }
    public set enabled(val: boolean) {

        this._enabled = val

        this.obj.visible = val        
    }



    public update() {

        if(!this._enabled) return

        this.labels.forEach(label => {

            label.update()
        })
    }

    public showHideLabel(side: string, show: boolean) {

        this.labels.forEach(label => {

            if(label.side == side) {

                if(show) label.show()
                else label.hide()
            }
        })
    }

    private createLabel() {

        this.obj = new THREE.Object3D()
        this.obj.name = 'distancelabel.obj'
        this.obj.visible = this._enabled

        let label: Label
        this.sides.forEach(side => {

            label = new Label(side, this.SE.ctrl.position)
            this.labels.push(label)
            this.obj.add(label.obj)
        })

        SceneManager.scene.add(this.obj)

        console.log(SceneManager.scene)
    }

    public getLabelBySide(side: string) {

        for(let i = 0; i < this.labels.length; i++) {

            if(this.labels[i].side == side)
                return this.labels[i]
        }
    }

    public getOppositeLabel(label) {

        let oLabel
        let index:number

        this.pairs.forEach( pair => {

            index = pair.indexOf(label.side)
            if(index != -1) oLabel = pair[index]
        })

        return this.getLabelBySide(oLabel)
    }






    private onMouseDown(e) {
        
        
    }

    private onMouseUp(e) {

    }
    
    private onMouseMove(e) {
        
    }
}