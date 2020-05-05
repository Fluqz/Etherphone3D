import { SceneManager } from '../../scene-manager';

import * as THREE from 'three'
import { Sound3D } from '../../theremin/sound-entity-3d';

export class AxesLine {

    public p1: THREE.Vector3
    public p2: THREE.Vector3

    public lineGeo: THREE.BufferGeometry
    public obj: THREE.Line

    public name: string

    public color: string

    constructor(color?: string, name?:string) {
        
        this.name = name

        this.color = color || '0xFFFFFF'

        this.p1 = new THREE.Vector3()
        this.p2 = new THREE.Vector3()

        this.lineGeo = new THREE.BufferGeometry()
        console.log(color)
        this.obj = new THREE.Line(this.lineGeo, new THREE.LineBasicMaterial({ color: new THREE.Color(this.color) }))
    }

    public update() {

        this.lineGeo.setFromPoints([this.p1, this.p2])
    }
}

export class AxesLabel {

    
    private SE: Sound3D

    private start: THREE.Vector3
    private end: THREE.Vector3

    private x: AxesLine
    private y: AxesLine
    private z: AxesLine

    public obj: THREE.Object3D

    private _enabled: boolean = false


    constructor(_SE: Sound3D) {

        this.SE = _SE

        this.start = new THREE.Vector3()
        this.end = new THREE.Vector3()

        this.createLabel()
    }



    public get enabled() { return this._enabled }
    public set enabled(val: boolean) {

        this._enabled = val

        this.obj.visible = val
        
        this.start.copy(this.SE.ctrl.position)

        this.update()
    }

    public reset() {

        this.start.copy(this.SE.ctrl.position)
        this.end.copy(this.SE.ctrl.position)

        this.update()
    }



    public update() {

        if(!this._enabled) return

        this.end.copy(this.SE.ctrl.position)

        this.x.p1.setX(this.start.x)
        this.x.p1.setY(this.end.y)
        this.x.p1.setZ(this.start.z)
        this.x.p2.setX(this.end.x)
        this.x.p2.setY(this.end.y)
        this.x.p2.setZ(this.start.z)
        this.x.update()
        
        this.y.p1.copy(this.start)
        this.y.p2.setX(this.start.x)
        this.y.p2.setY(this.end.y)
        this.y.p2.setZ(this.start.z)
        this.y.update()
        
        this.z.p1.setX(this.end.x)
        this.z.p1.setY(this.end.y)
        this.z.p1.setZ(this.start.z)
        this.z.p2.setX(this.end.x)
        this.z.p2.setY(this.end.y)
        this.z.p2.setZ(this.end.z)
        this.z.update()
    }

    private createLabel() {

        this.obj = new THREE.Object3D()
        this.obj.name = 'distancelabel.obj'
        this.obj.visible = this._enabled

        this.x = new AxesLine('#444444', 'x')
        this.obj.add(this.x.obj)
        
        this.y = new AxesLine('#222222', 'y')
        this.obj.add(this.y.obj)
        
        this.z = new AxesLine('#666666', 'z')
        this.obj.add(this.z.obj)

        SceneManager.scene.add(this.obj)
    }
}