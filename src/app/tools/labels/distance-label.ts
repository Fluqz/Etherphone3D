import { SceneManager } from '../../scene-manager';

import * as THREE from 'three'
import { Sound3D } from '../../theremin/sound-entity-3d';
import { Color } from 'src/app/color';

export class DistanceLabel {

    private SE: Sound3D

    private raycaster: THREE.Raycaster

    private start: THREE.Vector3
    private end: THREE.Vector3

    public labels: DistanceLine[] = []

    public obj: THREE.Object3D

    private _enabled: boolean = false

    private sides: string[] = ['top', 'bottom', 'left', 'right', 'front', 'back']
    private pairs: string[][] = [
        ['top', 'bottom'],
        ['left', 'right'],
        ['front', 'back'],
    ]



    constructor(_SE: Sound3D) {

        this.SE = _SE

        this.raycaster = new THREE.Raycaster()
        this.raycaster.near = .001
        this.raycaster.far = 1000

        this.createLabel()
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

        let label: DistanceLine
        this.sides.forEach(side => {

            label = new DistanceLine(side, this.SE.ctrl.position)
            this.labels.push(label)
            this.obj.add(label.obj)
        })

        SceneManager.scene.add(this.obj)
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
}


class DistanceLine {

    public side: string

    public obj: THREE.Object3D
    public line: THREE.Object3D
    private lineGeo: THREE.BufferGeometry
    private points: THREE.Vector3[] = []

    public start: THREE.Vector3
    public end: THREE.Vector3

    private raycaster: THREE.Raycaster
    private intersects: THREE.Intersection[] 
    private distance: number

    public color: THREE.Color

    public enabled: boolean 

    public direction: THREE.Vector3


    constructor(_side: string, _start: THREE.Vector3, _end?: THREE.Vector3) {

        this.side = _side

        this.start = _start

        this.end = _end
        if(_end == undefined) this.end = new THREE.Vector3()

        this.raycaster = new THREE.Raycaster()
        this.raycaster.near = .001
        this.raycaster.far = 1000

        this.direction = new THREE.Vector3()

        this.create()
    }

    private create() {

        this.enabled = true

        this.obj = new THREE.Object3D()
        this.obj.name = 'label.obj'

        this.lineGeo = new THREE.BufferGeometry()

        this.line = new THREE.Line(this.lineGeo, new THREE.LineBasicMaterial({
            color: Color.X,
            transparent: true,
            opacity: .4
        }))
        this.line.name = 'line.mesh'

        this.obj.add(this.line)

        this.computeDirection()
    }

    private raycastObjs(callback: Function) {

        this.raycaster.set(this.start, this.direction)

        this.intersects = this.raycaster.intersectObjects(SceneManager.environmentObjs, true)

        if(this.intersects.length > 0) {

            this.distance = this.intersects[0].distance

            this.end.copy(this.intersects[0].point)

            callback()
        }
        else this.intersects = null
    }

    private computeDirection() {

        switch(this.side) {

            case 'back':

                return this.direction.set(0, 0, -1)

            break

            case 'right':

                return this.direction.set(1, 0, 0)

            break

            case 'front': 

                return this.direction.set(0, 0, 1)
            break

            case 'left':

                return this.direction.set(-1, 0, 0)
            break
            
            case 'top': 

                return this.direction.set(0, 1, 0)
            break

            case 'bottom':

                return this.direction.set(0, -1, 0)
            break
        }

        return null
    }

    public hide() {

        this.enabled = false



    }

    public show() {

        this.enabled = true
    }

    public update() { 

        this.raycastObjs(()=> {

            this.updateLine([this.start, this.end])
        })
    }

    public updateLine(points: THREE.Vector3[]) {

        this.points = points

        this.lineGeo.setFromPoints(this.points)
    }
}