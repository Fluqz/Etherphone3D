import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

import * as THREE from 'three'
import { Sound3D } from '../theremin/sound-entity-3d';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Note } from '../theremin/note';
import { Sound } from '../theremin/sound-entity';
import { Theremin } from '../theremin/theremin';
import { Note3D } from '../theremin/note3D';


@Component({
  selector: 'selected-menu',
  templateUrl: './selected.component.html',
  styles: [
    `
    :host {
        
        display:block;    
        width: 100%;
        height: auto;
        color: #fefefe;
    
        resize: vertical;
        overflow: auto;
    }
    `
  ]
})
export class Selected implements AfterViewInit {

  @Input('theremin3D') theremin3D: Theremin3D

  public get selected() { return ObjectControl.selected }
  public get selectedObjs() { return ObjectControl.selectedObjs }

  public get isNote() { return this.selected instanceof Note3D }




  ngAfterViewInit() {


  }

  private isSelected(type: string) {

    if(ObjectControl.selected && ObjectControl.selected != null)
        return true
    else return false
  }

  public changeVolume() {

  }

  public setWave(wave: OscillatorType) {

    (this.selected.ctrl as Note).wave = wave
  }

  public toggleMuteSelected() {

    if(ObjectControl.selected.ctrl.muted)
      ObjectControl.selected.unmute()
    else ObjectControl.selected.mute()
    
  }


  public groupSoundEntities() {

    let ses: Sound[] = []
    let ses3D: Sound3D[] = []
    ObjectControl.selectedObjs.forEach(obj => {

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
    ObjectControl.selectedObjs.forEach(obj => {

      ses3D.push(this.theremin3D.getNoteByObj(obj))
      ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
    })

    let chord = this.theremin3D.theremin.ungroupNotes(ses)

    this.theremin3D.ungroupNotes(ses3D, chord)
  }
}