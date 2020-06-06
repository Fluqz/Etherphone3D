import { Raycaster, Vector3, Object3D, Plane, Ray, Intersection, MOUSE, PerspectiveCamera, OrthographicCamera, Scene } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SceneManager } from './scene-manager'
import { Theremin } from './theremin/theremin'
import { Theremin3D } from './theremin/theremin3D'
import { Sound3D } from './theremin/sound-entity-3d'
import { Note } from './theremin/note'
import { Note3D } from './theremin/note3D'
import { Chord3D } from './theremin/chord3D'

export class ObjectControl {

    public static instance: ObjectControl

    private mouseDown: boolean
    private mouse: Vector3

    public orbit: OrbitControls

    private raycaster: Raycaster

    private XKey: boolean
    private YKey: boolean
    private ZKey: boolean

    private plane: Plane

    public selectedObjs: Object3D[] = []
    public selected: Sound3D
    public _selectedObj: Object3D

    private ip: Vector3
    private offset: Vector3
    private moveTo: Vector3

    private theremin3D: Theremin3D
    
    constructor(_theremin3D: Theremin3D) {

        ObjectControl.instance = this

        this.theremin3D = _theremin3D

        this.mouseDown = false
        this.mouse = new Vector3()
        this.ip = new Vector3()
        this.offset = new Vector3()
        this.moveTo = new Vector3()
        this.raycaster = new Raycaster()
        
        this.plane = new Plane(new Vector3(0, 1, 0), 0)

        this.orbit = new OrbitControls(SceneManager.currentCamera, SceneManager.renderer.domElement)


        SceneManager.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false)
        
        SceneManager.renderer.domElement.addEventListener('keyup', this.onKeyUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('keydown', this.onKeyDown.bind(this), false)
    }

    public set orbitCamera(camera: THREE.Camera) { 

        this.orbit.reset()
        this.orbit.dispose()
        
        if(camera instanceof PerspectiveCamera)
            this.orbit = new OrbitControls(camera, SceneManager.renderer.domElement)
        if(camera instanceof OrthographicCamera)
            this.orbit = new OrbitControls(camera, SceneManager.renderer.domElement)
    }

    public get selectedObj() { return this._selectedObj }
    public set selectedObj(obj: Object3D) {

        if(obj != null && obj != undefined) {

            if(this._selectedObj != obj && this.selected) {

                this.selected.unselect()
            }

            this._selectedObj = obj

            switch(obj.name) {

                case 'osc.3D':
                case 'chord.3D':

                    this.selected = this.theremin3D.getNoteByObj(obj)

                    break

                default:

                    if(obj.parent instanceof Scene) {

                        this.selectedObj = null
                    }
                    else {
                        
                        this.selectedObj = obj.parent

                        return
                    } 
            }

            if(this.selected) 
                this.selected.select()
            else this._selectedObj = null
        }
        else {

            if(this.selected != null && this.selected != undefined) {

                this.selected.unselect()
                this.selected = null
            }

            this._selectedObj = null
            this.selectedObjs
        }
    }


    private collectRaycastObjs() {
        
        let objs: Object3D[] = []
        this.theremin3D.sounds3D.forEach(sound => {

            if(sound instanceof Note3D) {

                objs.push(sound.obj)
            }
            else if(sound instanceof Chord3D) {

                objs.push(sound.obj)

                sound.sounds3D.forEach(note => {
                    objs.push(note.obj)
                })
            }
        })

        return objs
    }

    // ON KEY DOWN SWITCH NOTE/CHORD TO OLD POSITION WHEN CLICKED
    // ON KEY UP SWITCH BACK TO CURRENT POSITION


    // EVENTS
    public onMouseDown(event) {
        // console.log(event)
        this.mouseDown = true

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        
        let vector = new Vector3(this.mouse.x, this.mouse.y, .5)
        vector.unproject(SceneManager.currentCamera)

        this.raycaster.setFromCamera(this.mouse, SceneManager.currentCamera)

        let intersects = this.raycaster.intersectObjects(this.collectRaycastObjs(), true)

        if(intersects.length > 0) {

            this.orbit.enabled = false

            if(intersects[0].object) {

                this.selectedObj = intersects[0].object

                if(this.selected) {

                    // If no shift key
                    if(!event.shiftKey) {

                        this.selectedObjs.forEach(obj => { this.theremin3D.getNoteByObj(obj).unselect() })
                        this.selectedObjs = []
                        this.selectedObjs.push(intersects[0].object)
                        // console.log(intersects[0].object,this.theremin3D.getNoteByObj(intersects[0].object))
    
                        // console.log('no shift', this.selected)
                        this.plane.setFromNormalAndCoplanarPoint(SceneManager.currentCamera.getWorldDirection(this.plane.normal) , intersects[0].object.position)

                        this.raycaster.ray.intersectPlane(this.plane, this.ip)

                        this.offset.copy(this.ip.sub(intersects[0].object.position))
                        // init move so its not at (0, 0, 0)
                        this.moveTo.copy(intersects[0].object.position)

                        this.selected.select()
                    }
                    else if(!this.selectedObjs.includes(intersects[0].object)) {
    
                        this.selectedObj = intersects[0].object
    
                        this.selectedObjs.push(intersects[0].object)

                        // Select all selected objs
                        this.selectedObjs.forEach(obj => { 
                             
                            this.theremin3D.getNoteByObj(obj).select()
                        })
                    }
                }
                else {

                    this.selectedObjs = []
                }
            }
            else {
                this.selectedObjs = []
                this.selectedObj = null
            }
        }
        else {
            this.selectedObjs = []
            this.selectedObj = null
        }

        // SceneSetup.instance.onMouseDown(event)
        console.log('CURRENTLY SELECTED: ', this.selectedObjs, '  Main: ', this.selected)
    }


    public onMouseUp(event) {
        
        this.mouseDown = false

        this.orbit.enabled = true

        if(!event.shiftKey) {

            // this.selected = null
            // this.selectedObjs = []
        }

        if(this.selected) {

            this.selected.mouseUp()
        }

        if(this.selectedObjs.length > 1) {

        }

        // SceneSetup.instance.onMouseUp(event)
        
    }

    public onMouseMove(event) {
        // event.preventDefault()

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

        this.raycaster.setFromCamera(this.mouse, SceneManager.currentCamera)

        if(this.mouseDown) {
            
            // When selected calc position
            if (this.selectedObjs.length == 1 && this.selected) {

                this.raycaster.ray.intersectPlane(this.plane, this.ip)

                this.moveTo.copy(this.ip.sub(this.offset))

                // Move SELECTED
                this.selected.move(this.moveTo, this.XKey, this.YKey, this.ZKey)
                // this.selectedObjs.position.copy(this.moveTo)
                this.theremin3D.theremin.updateSound(this.selected.ctrl)

            }
        }
        else {

            // HOVER OBJ
            let intersects = this.raycaster.intersectObjects(this.theremin3D.objs, true)
    
            if(intersects.length > 0) {

            }
        }
    }


    public onKeyDown(e) {

        console.log(e)

        const key = e.key.toLowerCase()
        
        if(key == 'x') {

            this.XKey = true
            this.YKey = false
            this.ZKey = false
        }
        else if(key == 'y') {
            
            this.XKey = false
            this.YKey = true
            this.ZKey = false
        }
        else if(key == 'z') {

            this.XKey = false
            this.YKey = false
            this.ZKey = true
        }
    }

    public onKeyUp(e) {

        const key = e.key.toLowerCase()
        
        this.XKey = true
        this.YKey = true
        this.ZKey = true
    }
}