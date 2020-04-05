import { Object3D, Mesh, Group, Scene } from 'three'

export class Tools {


    public static spliceElementFromArray(element: any, array: any[]) {

        let i = array.indexOf(element)

        if(i > 0 ) {

            return array.splice(i, 1)
        } 

        else return null
    }

    public static disposeObj(obj: any) {

        obj.traverse(object => {
            if (object !instanceof Object3D || object !instanceof Mesh || object !instanceof Group || object !instanceof Scene) return
            
            if(object.geometry) object.geometry.dispose()

            if (object.material) {
                if(object.material.length) {
                    for (const material of object.material) cleanMaterial(material)
                }
                else cleanMaterial(object.material)
            } else {
                for (const material of object.material) cleanMaterial(material)
            }
        })

        const cleanMaterial = material => {
            material.dispose()

            // dispose textures
            for (const key of Object.keys(material)) {
                const value = material[key]
                if (value && typeof value === 'object' && 'minFilter' in value) {
                    console.log('dispose texture!')
                    value.dispose()
                }
            }
        }
    }
}