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
  public theremin: Theremin
  public theremin3D: Theremin3D
  public objCtrl: ObjectControl

  constructor() {}

  public get currentCamera(){

    return SceneManager.camera
  }

  ngAfterViewInit() {

    this.container = document.querySelector('#webGL')

    new SceneManager()

    this.container.append(SceneManager.renderer.domElement)

    setTimeout(()=> {

      this.theremin = new Theremin()

      this.theremin3D = new Theremin3D(this.theremin)

      this.objCtrl = new ObjectControl(this.theremin3D)

      this.addOsc(300)

      this.theremin.toggleOnOff(true)
    })


    this.loop()
  }

  private loop() {

    requestAnimationFrame(this.loop.bind(this))

    SceneManager.update()

  }

  public addOsc(frequency?: number) {

    let osc = this.theremin.addNote(frequency == undefined ? 440 : frequency)
    this.theremin3D.addSoungEntity3D(osc)
  }
}
