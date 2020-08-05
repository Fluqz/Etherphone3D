import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

import * as THREE from 'three'
import { Sound3D } from '../theremin/sound-entity-3d';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Note } from '../theremin/note';
import { Sound } from '../theremin/sound-entity';
import { Theremin } from '../theremin/theremin';


@Component({
  selector: 'selected-menu',
  templateUrl: './selected.component.html',
  styles: [
    `
    :host {
        
        display:block;    
        width: 100%;
        height: auto;
        background-color: #0c1614;
        color: #fefefe;
    
        resize: vertical;
        overflow: auto;
    }
    `
  ]
})
export class Selected implements AfterViewInit {

    @Input('objCtrl') objCtrl: ObjectControl
    @Input('theremin3D') theremin3D: Theremin3D

    ngAfterViewInit() {


    }

  private isSelected(type: string) {

    if(this.objCtrl.selected && this.objCtrl.selected != null)
        return true
    else return false
  }

  public get selectedVolume() { return this.objCtrl.selected.ctrl.volume }
  public set selectedVolume(volume: number) { 

    let moveTo = this.objCtrl.selected.ctrl.position.clone()
    moveTo.y = volume * Theremin.instance.X.sF // NEEDS TO HAPPEN SOMEWHERE ELSE
    this.objCtrl.selected.move(moveTo)

    this.theremin3D.theremin.updateSound(this.objCtrl.selected.ctrl)
  }

  
  public get selectedFrequency() { return this.objCtrl.selected.ctrl.frequency }
  public set selectedFrequency(frequency: number) { 

    let moveTo = this.objCtrl.selected.ctrl.position.clone()
    moveTo.x = frequency // NEEDS TO HAPPEN SOMEWHERE ELSE
    this.objCtrl.selected.move(moveTo)

    this.theremin3D.theremin.updateSound(this.objCtrl.selected.ctrl)
  }
 
  public changeVolume() {

    
  }


  public toggleMuteSelected() {

    if(this.objCtrl.selected.ctrl.muted)
      this.objCtrl.selected.unmute()
    else this.objCtrl.selected.mute()
    
  }

  public toggleAxesLabel() {

    this.objCtrl.selected.axesLabel.enabled = !this.objCtrl.selected.axesLabel.enabled
    this.objCtrl.selected.axesLabel.update()
  }
  
  public toggleMemoryLabel() {

    this.objCtrl.selected.memoryLabel.enabled = !this.objCtrl.selected.memoryLabel.enabled
    this.objCtrl.selected.memoryLabel.update()
  }
  
  public toggleDistanceLabel() {

    this.objCtrl.selected.distanceLabel.enabled = !this.objCtrl.selected.distanceLabel.enabled
    this.objCtrl.selected.distanceLabel.update()
  }

  public groupSoundEntities() {

    let ses: Sound[] = []
    let ses3D: Sound3D[] = []
    this.objCtrl.selectedObjs.forEach(obj => {

      // Collect all selected Sounds
      ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
      // Collect all selected Sound3D's
      ses3D.push(this.theremin3D.getNoteByObj(obj))
    })

    // Make Chord from Sounds
    let chord = this.theremin3D.theremin.groupNotesToChord(ses)

    // Add 3D objs to new Chord3D obj
    this.theremin3D.groupNotesToChord(chord, ses3D)
  }

  public ungroupSoundEntities() {

    let ses: Sound[] = []
    let ses3D: Sound3D[] = []
    this.objCtrl.selectedObjs.forEach(obj => {

      ses3D.push(this.theremin3D.getNoteByObj(obj))
      ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
    })

    let chord = this.theremin3D.theremin.ungroupNotes(ses)

    this.theremin3D.ungroupNotes(ses3D, chord)
  }
}