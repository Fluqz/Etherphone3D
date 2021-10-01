import { Raycaster, Vector3, Object3D, Plane, Ray, Intersection, MOUSE, PerspectiveCamera, OrthographicCamera, Scene } from 'three'
import { Theremin3D } from './theremin/theremin3D'
import { SceneManager } from './scene-manager'
import { Note3D } from './theremin/note3D'
import { Theremin } from './theremin/theremin'

export class ObjectControl {

    private static theremin3D: Theremin3D

    public static selectedObjs: Object3D[] = []
    public static selected: Note3D
    public static _selectedObj: Object3D

    private mouseDown: boolean
    public dragObj: boolean = false
    private mouse: Vector3

    private raycaster: Raycaster
    private ip: Vector3
    private offset: Vector3
    private moveTo: Vector3
    private plane: Plane

    private keyMap: Map<string, boolean> = new Map()
    private XKey: boolean = true
    private YKey: boolean = true
    private ZKey: boolean = true
    
    constructor(_theremin3D: Theremin3D) {

        ObjectControl.theremin3D = _theremin3D

        this.mouseDown = false
        this.mouse = new Vector3()
        this.ip = new Vector3()
        this.offset = new Vector3()
        this.moveTo = new Vector3()
        this.raycaster = new Raycaster()
        
        this.plane = new Plane(new Vector3(0, 1, 0), 0)

        SceneManager.renderer.domElement.addEventListener('pointerdown', this.onMouseDown.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('pointerup', this.onMouseUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('pointermove', this.onMouseMove.bind(this), false)

        // document.addEventListener('mouseleave', this.onLeaveContainer.bind(this), false)

        SceneManager.renderer.domElement.addEventListener('touchstart', this.onTouchStart.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('touchend', this.onTouchEnd.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('touchcancel', this.onTouchCancel.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('touchmove', this.onTouchMove.bind(this), false)
        
        SceneManager.renderer.domElement.addEventListener('keyup', this.onKeyUp.bind(this), false)
        SceneManager.renderer.domElement.addEventListener('keydown', this.onKeyDown.bind(this), false)
    }


    public static get selectedObj() { return ObjectControl._selectedObj }
    public static set selectedObj(obj: Object3D) {

        if(obj != null && obj != undefined) {

            if(ObjectControl._selectedObj != obj && ObjectControl.selected) {

                ObjectControl.selected.unselect()
            }

            ObjectControl._selectedObj = obj

            switch(obj.name) {

                case 'osc.3D':
                case 'chord.3D':

                    ObjectControl.selected = ObjectControl.theremin3D.getNoteByObj(obj)

                    break

                default:

                    if(obj.parent instanceof Scene) {

                        ObjectControl.selectedObj = null
                    }
                    else {
                        
                        ObjectControl.selectedObj = obj.parent

                        return
                    } 
            }

            if(ObjectControl.selected) 
                ObjectControl.selected.select()
            else ObjectControl._selectedObj = null
        }
        else {

            if(ObjectControl.selected != null && ObjectControl.selected != undefined) {

                ObjectControl.selected.unselect()
                ObjectControl.selected = null
            }

            ObjectControl._selectedObj = null
        }
    }


    private collectRaycastObjs() {
        
        let objs: Object3D[] = []
        ObjectControl.theremin3D.notes3D.forEach(note => {

            objs.push(note.obj)
        })

        return objs
    }

    // ON KEY DOWN SWITCH NOTE/CHORD TO OLD POSITION WHEN CLICKED
    // ON KEY UP SWITCH BACK TO CURRENT POSITION


    // EVENTS
    public onMouseDown(event) {
        // console.log(event)
        this.mouseDown = true

        this.mouse.x = (event.clientX / SceneManager.w) * 2 - 1
        this.mouse.y = -(event.clientY / SceneManager.h) * 2 + 1
        
        let vector = new Vector3(this.mouse.x, this.mouse.y, .5)
        vector.unproject(SceneManager.currentCamera)

        this.raycaster.setFromCamera(this.mouse, SceneManager.currentCamera)

        let intersects = this.raycaster.intersectObjects(this.collectRaycastObjs(), true)

        if(intersects.length > 0) {

            SceneManager.orbit.enabled = false

            if(intersects[0].object) {

                ObjectControl.selectedObj = intersects[0].object

                if(ObjectControl.selected) {

                    this.dragObj = true

                    // If no shift key
                    if(!event.shiftKey) {

                        ObjectControl.selectedObjs.forEach(obj => { ObjectControl.theremin3D.getNoteByObj(obj).unselect() })
                        ObjectControl.selectedObjs = []
                        ObjectControl.selectedObjs.push(intersects[0].object)
                        // console.log(intersects[0].object,this.theremin3D.getNoteByObj(intersects[0].object))
    
                        // console.log('no shift', this.selected)
                        this.plane.setFromNormalAndCoplanarPoint(SceneManager.currentCamera.getWorldDirection(this.plane.normal) , intersects[0].object.position)

                        this.raycaster.ray.intersectPlane(this.plane, this.ip)

                        this.offset.copy(this.ip.sub(intersects[0].object.position))
                        // init move so its not at (0, 0, 0)
                        this.moveTo.copy(intersects[0].object.position)

                        ObjectControl.selected.select()
                    }
                    else if(!ObjectControl.selectedObjs.includes(intersects[0].object)) {
    
                        ObjectControl.selectedObj = intersects[0].object
    
                        ObjectControl.selectedObjs.push(intersects[0].object)

                        // Select all selected objs
                        ObjectControl.selectedObjs.forEach(obj => { 
                             
                            ObjectControl.theremin3D.getNoteByObj(obj).select()
                        })
                    }
                }
                else {

                    ObjectControl.selectedObjs = []
                }
            }
            else {
                ObjectControl.selectedObjs = []
                ObjectControl.selectedObj = null
            }
        }
        else {
            ObjectControl.selectedObjs = []
            ObjectControl.selectedObj = null
        }

        // SceneSetup.instance.onMouseDown(event)
        console.log('CURRENTLY SELECTED: ', ObjectControl.selectedObjs, '  Main: ', ObjectControl.selected)
    }


    public onMouseUp(event) {
        
        this.mouseDown = false

        this.dragObj = false

        SceneManager.orbit.enabled = true

        if(!event.shiftKey) {

            // this.selected = null
            // this.selectedObjs = []
        }

        if(ObjectControl.selected) {

            ObjectControl.selected.mouseUp()
        }

        if(ObjectControl.selectedObjs.length > 1) {

        }

        // SceneSetup.instance.onMouseUp(event)
        
    }

    public onMouseMove(event) {
        // event.preventDefault()

        this.mouse.x = (event.clientX / SceneManager.w) * 2 - 1
        this.mouse.y = -(event.clientY / SceneManager.h) * 2 + 1

        this.raycaster.setFromCamera(this.mouse, SceneManager.currentCamera)

        if(this.mouseDown) {
            
            // When selected calc position
            if (ObjectControl.selectedObjs.length == 1 && ObjectControl.selected) { // MULTIPLE? WHY length = 1

                // HIDE MENU

                this.raycaster.ray.intersectPlane(this.plane, this.ip)

                this.moveTo.copy(this.ip.sub(this.offset))


                if(!this.XKey) this.moveTo.x = ObjectControl.selected.position.x
                if(!this.YKey) this.moveTo.y = ObjectControl.selected.position.y
                if(!this.ZKey) this.moveTo.z = ObjectControl.selected.position.z

                // if(Y || Y == undefined) tmpPos.y = (moveTo.y)
                // if(Z || Z == undefined) tmpPos.z = (moveTo.z)

                // Move SELECTED
                Theremin3D.moveNote(ObjectControl.selected, this.moveTo)
            }
        }
        else {

            // HOVER OBJ
            let intersects = this.raycaster.intersectObjects(ObjectControl.theremin3D.objs, true)
    
            if(intersects.length > 0) {

            }
        }
    }

    private onTouchStart(event: TouchEvent) {

        this.onMouseDown(event)
    }
    private onTouchEnd(event) {
        
        this.onMouseUp(event)
    }
    private onTouchCancel(event) {
        
        this.onMouseUp(event)
    }
    private onTouchMove(event) {
        
        this.onMouseMove(event)
    }

    private onLeaveContainer() {

        console.log('left')
        ObjectControl.selected = null

        this.mouseDown = false
    }

    // onkeydown = onkeyup = {
    //     e = e || event; // to deal with IE
    //     map[e.keyCode] = e.type == 'keydown';
    //     /* insert conditional here */
    // }

    public onKeyDown(e: KeyboardEvent) {

        // MAKE POSSIBLE TO CLICK TWO KEYS e.g. X AND Y AND DONT CHANGE Z 
        const key = e.key.toLowerCase()

        if(key == 'x' || key == 'y' || key == 'z' || key == '<') {
            
            this.XKey = false
            this.YKey = false
            this.ZKey = false
            
            this.keyMap.set(key, e.type == 'keydown')

            if(this.keyMap.get('x')) {

                this.XKey = true
            }
            if(this.keyMap.get('y')) {
                
                this.YKey = true
            }
            if(this.keyMap.get('z') || this.keyMap.get('<')) {

                this.ZKey = true
            }
        }
    }

    public onKeyUp(e) {

        const key = e.key.toLowerCase()

        if(key == 'x' || key == 'y' || key == 'z' || key == '<') {
        
            this.keyMap.set(key, e.type == 'keydown')

            if(this.keyMap.get('x') && this.keyMap.get('y') || 
                this.keyMap.get('x') && (this.keyMap.get('z') || this.keyMap.get('<')) || 
                this.keyMap.get('y') && (this.keyMap.get('z') || this.keyMap.get('<')) ||
                this.keyMap.get('x') && this.keyMap.get('y') && (this.keyMap.get('z') || this.keyMap.get('<'))) {
                
                if(this.keyMap.get(key)) {

                    this.XKey = false
                }
            }
            else {
                
                this.XKey = true
                this.YKey = true
                this.ZKey = true
            }
        }
    }

    onResize() {

    }
}