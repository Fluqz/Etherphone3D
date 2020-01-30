import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

import * as THREE from 'three'
import { SoundEntity3D } from '../soundEntity3D';
import { SoundEntity } from '../sound-entity';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin3D';


@Component({
  selector: 'selected-menu',
  templateUrl: './selected.component.html',
//   styleUrls: ['./selected.component.css']
})
export class Selected implements AfterViewInit{

    @Input('objCtrl') objCtrl: ObjectControl 
    @Input('theremin3D') theremin3D: Theremin3D

    ngAfterViewInit() {


    }

  private getSelected(type: string) {

    if(this.objCtrl.selected && this.objCtrl.selected != null)
        return true
    else return false
  }

  public get selectedVolume() { return this.objCtrl.selected.ctrl.volume }
  public set selectedVolume(volume: number) { 

    let moveTo = this.objCtrl.selected.ctrl.position.clone()
    moveTo.y = volume // NEEDS TO HAPPEN SOMEWHERE ELSE
    this.objCtrl.selected.move(moveTo)

    this.theremin3D.theremin.updateNote(this.objCtrl.selected.ctrl)
  }
 
  public changeVolume() {

    
  }

  public groupSoundEntities() {

    let ses: SoundEntity[] = []
    let ses3D: SoundEntity3D[] = []
    this.objCtrl.selectedObjs.forEach(obj => {

      ses3D.push(this.theremin3D.getNoteByObj(obj))
      ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
    })

    let chord = this.theremin3D.theremin.groupNotesToChord(ses)

    this.theremin3D.groupNotesToChord(chord, ses3D)
  }
}