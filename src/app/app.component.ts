import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Theremin } from './theremin';
import { SceneManager, CameraType } from './scene-manager';
import { Theremin3D } from './theremin3D';
import { ObjectControl } from './object-control';
import { Chord } from './chord';
import { SoundEntity } from './sound-entity';
import { SoundEntity3D } from './sound-entity-3d';
import { DragWindow } from './tools/drag-window';

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

  private xOffset: number
  private yOffset: number

  private mouseDownEvent: any
  private mouseUpEvent: any
  private mouseMovevent: any

  private mouseDown: boolean = false

  private selected: HTMLElement

  private dragWindow: DragWindow

  constructor() {

    this.dragWindow = new DragWindow()
  }


  ngAfterViewInit() {

    this.container = document.querySelector('#webGL')

    new SceneManager()

    this.container.append(SceneManager.renderer.domElement)

    setTimeout(()=> {

      this.theremin = new Theremin()

      this.theremin3D = new Theremin3D(this.theremin)

      this.objCtrl = new ObjectControl(this.theremin3D)

      // this.addOsc(300)

      this.theremin.toggleOnOff(true)
    })


    this.loop()

    // Channel html element addaevent
    this.mouseDownEvent = this.onMouseDown.bind(this)
    document.addEventListener('mousedown', this.mouseDownEvent, false)

    this.mouseUpEvent = this.onMouseUp.bind(this)
    document.addEventListener('mouseup', this.mouseUpEvent, false)
    
    this.mouseMovevent = this.onMouseMove.bind(this)
    document.addEventListener('mousemove', this.mouseMovevent, false)
  }

  private loop() {

    requestAnimationFrame(this.loop.bind(this))

    SceneManager.update()

  }

  public setCamera(type:string) {

    if(type == 'orthographic') 
      SceneManager.activeCamera = CameraType.ORTHOGRAPHIC
      
    else if(type == 'perspective') 
      SceneManager.activeCamera = CameraType.PERSPECTIVE

    this.objCtrl.orbitCamera = SceneManager.currentCamera
  }

  public addOsc(frequency?: number) {

    let osc = this.theremin.addNote(frequency == undefined ? 440 : frequency)
    this.theremin3D.addSoungEntity3D(osc)
  }

  public onMouseDown(e) {

    this.mouseDown = true

    this.dragWindow.onMouseDown(e)
    
  }

  public onMouseMove(e) {
    
    this.dragWindow.onMouseMove(e)
  }
  
  public onMouseUp(e) {
    
    this.dragWindow.onMouseUp(e)
  }
}
