import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Theremin } from './theremin';
import { SceneManager } from './scene-manager';
import { Theremin3D } from './theremin3D';
import { ObjectControl } from './object-control';
import { Chord } from './chord';
import { SoundEntity } from './sound-entity';
import { SoundEntity3D } from './soundEntity3D';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  private container: HTMLElement
  private theremin: Theremin
  private theremin3D: Theremin3D
  private objCtrl: ObjectControl

  constructor() {}

  public get currentCamera(){

    return SceneManager.camera
  }

  ngAfterViewInit() {

    this.container = document.querySelector('#webGL')

    new SceneManager()

    this.container.append(SceneManager.renderer.domElement)

    this.theremin = new Theremin()

    this.theremin3D = new Theremin3D(this.theremin)

    this.objCtrl = new ObjectControl(this.theremin3D)

    this.addOsc(300)

    this.loop()
  }

  private loop() {

    requestAnimationFrame(this.loop.bind(this))

    SceneManager.update()

  }

  private addOsc(frequency?: number) {

    let osc = this.theremin.addNote(frequency == undefined ? 440 : frequency)
    this.theremin3D.addSoungEntity3D(osc)
  }

  private getSelected(type: string) {

    if(this.objCtrl && this.objCtrl.selected != null) {
      if(this.objCtrl.selected.ctrl.type == type)
        return false
      else return true
    }
  }

  private groupSounEntities() {

    let ses: SoundEntity[] = []
    let ses3D: SoundEntity3D[] = []
    this.objCtrl.selectedObjs.forEach(obj => {

      ses3D.push(this.theremin3D.getNoteByObj(obj))
      ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
    })

    let chord = this.theremin.groupNotesToChord(ses)

    this.theremin3D.groupNotesToChord(chord, ses3D)
  }
}
