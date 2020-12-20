
import * as THREE from 'three'

import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'


export class LoadingManager {

    public static modelQueue: { count: number, path: string, callback: Function }[] = []
    private static modelQueueCount: number = 0
    private static modelsLoadedCount: number = 0
    public static models: { path: string, gltf: GLTF }[] = []

    public static textureQueue: { count: number, path: string, callback: Function }[] = []
    private static textureQueueCount: number = 0
    private static texturesLoadedCount: number = 0

    public static textures: { path: string, texture: THREE.Texture }[] = []

    public static onloads: { modelCount: number, textureCount: number, cb: Function }[] = []

    private static gltfLoadingManager: THREE.LoadingManager = new THREE.LoadingManager()
    private static textureLoadingManager: THREE.LoadingManager = new THREE.LoadingManager()

    private static gltfLoader: GLTFLoader = new GLTFLoader(LoadingManager.gltfLoadingManager)
    private static textureLoader: THREE.TextureLoader = new THREE.TextureLoader(LoadingManager.textureLoadingManager)

    private static modelsInProgress: boolean = false
    private static texturesInProgress: boolean = false


    /** Add a callback function for one or multiple loaded objects (Entity callback).
    *  The callback has to be added after one or multiple objects are added to the queue.
    * It will be called when the same amount is loaded as items in the queue at the moment of registration
    *  @param {Function} cb - Entity callback function
    *  @param {string} waitFor - Call after models/textures/both are loaded
    */
    public static addCallback(cb: Function, waitFor: string = 'texture' || 'model' || 'both') {

        // If queue did finish without async loading -> instantly call back
        if(waitFor == 'model' && !LoadingManager.modelsInProgress) cb()
        else if(waitFor == 'texture' && !LoadingManager.texturesInProgress) cb()
        else if(waitFor == 'both' && !LoadingManager.modelsInProgress && !LoadingManager.texturesInProgress) cb()
        else {

            // If async -> push callback to list
            LoadingManager.onloads.push({
                modelCount: waitFor == 'model' || waitFor == 'both' ? LoadingManager.modelQueueCount : undefined,
                textureCount: waitFor == 'texture' || waitFor == 'both' ? LoadingManager.textureQueueCount : undefined,
                cb: cb
            })
        }
    }

    /** This function will check if the stored callback should be called or not */
    private static checkForCallback() {

        if(LoadingManager.onloads.length == 0) return

        for (let i = LoadingManager.onloads.length - 1; i >= 0; i--) {
        
            let cb = LoadingManager.onloads[i]

            if(cb.modelCount != null && cb.textureCount == null) {
            
                if(cb.modelCount <= LoadingManager.modelsLoadedCount) {

                    cb.cb()

                    LoadingManager.onloads.splice(i, 1)
                }
            }
            else if(cb.textureCount != null && cb.modelCount == null) {

                if(cb.textureCount <= LoadingManager.texturesLoadedCount) {

                    cb.cb()

                    LoadingManager.onloads.splice(i, 1)
                }
            }
            else if(cb.modelCount != null && cb.textureCount != null) {

                if(cb.modelCount <= LoadingManager.modelsLoadedCount && cb.textureCount <= LoadingManager.texturesLoadedCount) {

                    cb.cb()

                    LoadingManager.onloads.splice(i, 1)
                }
            }
        }
    }

    /** Resets the LoaderManager */ 
    public static reset() {

        LoadingManager.modelsInProgress = false
        LoadingManager.texturesInProgress = false

        LoadingManager.modelQueueCount = 0
        LoadingManager.modelsLoadedCount = 0
        LoadingManager.textureQueueCount = 0
        LoadingManager.texturesLoadedCount = 0

        LoadingManager.onloads = []
    }




    // GLTF ------------------------------------------------
    /** Load glTF files in a queue system
     * @param {string} path - Path to file
     * @param {Function} onComplete - Callback function, that is called when glTF is loaded
     */
    public static loadGLTF(path: string, onComplete: Function) {

        // Errors
        if(path == null || path == '') { console.log('MODEL PATH IS NULL!', path); return }
        if(path.includes('.jpg') || path.includes('.jpeg') || path.includes('.png')) {

            console.log('FALSE LOADING ERROR - LOADING TEXTURE WITH GLTF LOADER')
        }

        // Add model to queue
        LoadingManager.modelQueueCount += 1
        LoadingManager.modelQueue.push({ count: LoadingManager.modelQueueCount, path: path, callback: onComplete })

        // If queue is running -> dont start twice
        if(LoadingManager.modelsInProgress) {

            return
        }

        // Start queue loading for models
        this.loadFromModelQueue()
    }

    /** Recursive function, that loops through the modelQueue. Loads (async) or fetches (sync) model and runs callback when found. */
    private static loadFromModelQueue() {

        // IF NO QUEOBJ LEFT - FINISH
        if(LoadingManager.modelQueue.length == 0) { 
        
            // console.log('QUEUE ENDED FINISH!')
            LoadingManager.modelsInProgress = false

            return 
        }

        LoadingManager.modelsInProgress = true


        // GET QUEUE OBJ
        let queueObj = LoadingManager.modelQueue.shift()

        // SEARCH OR LOAD
        let found: boolean = false

        // onLoad callback WHERE TO PUT THIS?
        LoadingManager.gltfLoadingManager.onLoad = ()=> {

        }

        // Check stored models if already exists
        if(LoadingManager.models.length > 0) {

            LoadingManager.models.forEach(model => {

                if(model.path == queueObj.path) {
                    
                    // console.log('Already stored!', clone)

                    found = true

                    let clone = model.gltf.scene.clone()

                    queueObj.callback(clone, model.gltf.animations)

                    LoadingManager.modelsLoadedCount += 1

                    LoadingManager.checkForCallback()

                    LoadingManager.loadFromModelQueue()

                    return
                }
            })
        }

        // not found -> Load and store model
        if(!found){

            LoadingManager.loadGLTFModel(queueObj.path, queueObj.callback)
        }
    }

    private static loadGLTFModel(path: string, onLoad: Function) {
        // console.log('Need to load', path)

        LoadingManager.gltfLoader.load(path, (gltf)=> {

            // console.log(path, model)

            // let bbox = new THREE.Box3().setFromObject(model.scene)
            // let v3 = new THREE.Vector3()
            // bbox.getSize(v3)
            // console.log(path, v3)

            LoadingManager.models.push({
                path: path,
                gltf: gltf
            })

            // console.log('Loaded and saved', model)

            let clone = gltf.scene.clone()


            onLoad(clone, gltf.animations)

            LoadingManager.modelsLoadedCount += 1

            LoadingManager.checkForCallback()

            LoadingManager.loadFromModelQueue()

            return

        }, undefined, (error)=> {

            LoadingManager.modelsLoadedCount += 1

            console.error('Error ------------------------------',error,error.message)
            console.error(path)
        })
    }

    // GLTF END --------------------------------------------------
















    // TEXTURES ----------------------------------------------------
    /** Load texture files in a queue system
     * @param {string} path - Path to file
     * @param {Function} onComplete - Callback function, that is called when glTF is loaded
     */
    public static loadTexture(path: string, onComplete: Function) {

        // ERRORS    
        if(path == null || path == '') { console.log('TEXTURE PATH IS NULL!', path); return }

        if(path.includes('.gltf') || path.includes('.glb')) {

            console.log('FALSE LOADING ERROR - LOADING GLTF WITH TEXTURE LOADER')
            return
        }

        // Add to queue
        LoadingManager.textureQueue.push({ count: LoadingManager.textureQueueCount, path: path, callback: onComplete })
        LoadingManager.textureQueueCount += 1

        // If queue is already running -> dont start it twice
        if(LoadingManager.texturesInProgress) {

            return
        }

        // Start queue loading
        this.loadFromTextureQueue()
    }

    private static loadFromTextureQueue() {

        // IF NO QUEUEOBJ LEFT - FINISH
        if(LoadingManager.textureQueue.length == 0) { 
        
            LoadingManager.texturesInProgress = false

            return 
        }

        // Set loader to inProgress
        LoadingManager.texturesInProgress = true

        // GET QUEUE OBJ
        let queueObj = LoadingManager.textureQueue.shift()

        LoadingManager.textureLoadingManager.onLoad = ()=> {

            console.log('All textures loaded')
        }
        
        // Check stored textures
        let found: boolean = false

        if(LoadingManager.textures.length > 0) {

            LoadingManager.textures.forEach(texture => {

                if(texture.path == queueObj.path){

                    // console.log('Already stored!', clone)
                    
                    found = true

                    let clone = texture.texture.clone()
                    clone.needsUpdate = true;

                    queueObj.callback(clone)
        
                    LoadingManager.texturesLoadedCount += 1

                    LoadingManager.checkForCallback()
        
                    LoadingManager.loadFromTextureQueue()

                    return
                }
            })
        }

        // Load and store model
        if(!found){

            this.loadTextureByPath(queueObj.path, queueObj.callback)
        }
    }

    private static loadTextureByPath(path: string, onLoad: Function) {

        LoadingManager.textureLoader.load(path, (texture)=> {

            texture.encoding = THREE.sRGBEncoding
            texture.needsUpdate = true

            // Store texture
            LoadingManager.textures.push({
                path: path,
                texture: texture
            })

            // Dont use the stored reference -> Clone it
            let clone = texture.clone()
            clone.needsUpdate = true

            // Callback
            onLoad(clone)

            // Check for entity callback
            LoadingManager.texturesLoadedCount += 1

            LoadingManager.checkForCallback()

            LoadingManager.loadFromTextureQueue()

            return

        }, undefined, (error)=> {

            LoadingManager.texturesLoadedCount += 1

            console.error('Error', error.message)
        })
    }
}



