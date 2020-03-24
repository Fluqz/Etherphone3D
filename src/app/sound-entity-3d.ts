import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3 } from 'three'
import { SoundEntity } from './sound-entity'

export abstract class SoundEntity3D {

    public abstract ctrl: SoundEntity
    public abstract obj3D: Mesh

    public abstract move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean)
}