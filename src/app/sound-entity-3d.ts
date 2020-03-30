import { Mesh, SphereBufferGeometry, MeshNormalMaterial, Vector3 } from 'three'
import { SoundEntity } from './sound-entity'
import { DistanceLabel } from './tools/distance-label'
import { MemoryLabel } from './tools/memory-label'

export abstract class SoundEntity3D {

    public abstract ctrl: SoundEntity
    public abstract obj: Mesh

    public abstract distanceLabel: DistanceLabel
    public abstract memoryLabel: MemoryLabel

    public abstract move(moveTo: Vector3, X?: boolean, Y?: boolean, Z?: boolean)
    public abstract select() 
    public abstract unselect() 
    public abstract mouseUp() 
}