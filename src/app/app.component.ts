import { Component, AfterViewInit, OnDestroy, HostListener, NgZone } from '@angular/core';

import { Theremin } from './theremin/theremin';
import { SceneManager, CameraType } from './scene-manager';
import { Theremin3D } from './theremin/theremin3D';
import { ObjectControl } from './object-control';
import { DragWindow } from './tools/drag-window';

import { VRButton } from 'three/examples/jsm/webxr/VRButton'

import { Storage } from './storage'
import { BeatMachine } from './beatmachine/beat-machine';

import { Globals } from './globals'

@Component({
  selector: 'app-root',
  template: `

    <div id="webGL"></div>

    <div *ngIf="true" id="ui-wrapper" (mouseenter)="mouseenterUI()" (mouseleave)="mouseenterUI()">


      <div>

        <div class="btn" (click)="setCamera('perspective')">P</div>

        <div class="btn" (click)="setCamera('orthographic')">O</div>

      </div>


      <div id="obj-menu" class="drag-window">

          <div class="drag-bar"></div>

          <theremin *ngIf="theremin && theremin3D" [theremin]="theremin" [theremin3D]="theremin3D"></theremin>

          <selected-menu *ngIf="theremin3D" [theremin3D]="theremin3D"></selected-menu>

          <beatmachine *ngIf="theremin3D" class="drag-window" [theremin3D]="theremin3D"></beatmachine>

      </div>


      <!--<mixer *ngIf="theremin3D" class="drag-window" [theremin3D]="theremin3D"></mixer>-->

      <dashboard *ngIf="theremin3D" class="drag-window" [theremin]="theremin" [theremin3D]="theremin3D"></dashboard>

    </div>
        
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy{

  private container: HTMLElement

  public theremin: Theremin
  public theremin3D: Theremin3D
  public objCtrl: ObjectControl
  public sm: SceneManager

  private mouseDownEvent: any
  private mouseUpEvent: any
  private mouseMovevent: any
  private keydownEvent: any
  private keyupEvent: any
  private resizeEvent: any

  private dragWindow: DragWindow

  public UIHidden: boolean = false

  private AFID: number

  constructor(public zone: NgZone) {

    this.dragWindow = new DragWindow()
  }


  ngAfterViewInit() {

    this.container = document.querySelector('#webGL')

    this.sm = new SceneManager(this.container)

    window.setTimeout(()=>{

      this.theremin = new Theremin()

      this.serializeIn(Storage.load())
      
      this.theremin.toggleOnOff(false)

      this.theremin3D = new Theremin3D(this.theremin)
      this.objCtrl = new ObjectControl(this.theremin3D)

      // this.theremin.toggleOnOff(false)

      this.loop()
    })


    let vr = VRButton.createButton( SceneManager.renderer )
    vr.addEventListener('click', this.enableVR.bind(this), false)
    // VR Button
    this.container.appendChild( vr );

    // Events
    this.resizeEvent = this.onResize.bind(this)
    window.onresize = this.resizeEvent

    this.mouseDownEvent = this.onMouseDown.bind(this)
    document.addEventListener('pointerdown', this.mouseDownEvent, false)

    this.mouseUpEvent = this.onMouseUp.bind(this)
    document.addEventListener('pointerup', this.mouseUpEvent, false)
    
    this.mouseMovevent = this.onMouseMove.bind(this)
    document.addEventListener('pointermove', this.mouseMovevent, false)

    
    this.keydownEvent = this.onkeydown.bind(this)
    document.addEventListener('keydown', this.keydownEvent, false)

    this.keyupEvent = this.onkeyup.bind(this)
    document.addEventListener('keyup', this.keyupEvent, false)
  }

  enableVR() {

    if(!this.sm) return

    SceneManager.renderer.xr.enabled = Globals.VR = !Globals.VR

    if(Globals.VR) {

      this.stopLoop()
      SceneManager.renderer.setAnimationLoop(this.loop.bind(this))
      SceneManager.createController()
    } 
    else {

      this.loop()
      SceneManager.renderer.setAnimationLoop(null)
      SceneManager.removeController()
    }

  }

  public loop(): void {

    this.update()

    // this.zone.runOutsideAngular(()=> {
      this.stopLoop()
      this.AFID = window.requestAnimationFrame(this.loop.bind(this))
    // })
  }

  public stopLoop() {

    window.cancelAnimationFrame(this.AFID)
  }
  
  private update() {

    this.theremin.update()
    this.theremin3D.update()

    this.sm.update()
  }

  public rotateCamera(e) {

    let axis = e.target.getAttribute('axis')

    if(axis == 'x') axis = 'y'
    else if(axis == 'y') axis = 'z'
    else if(axis == 'z') axis = 'x'

    // this.rotateCamera(axis)

    e.target.setAttribute('axis', axis)
  }

  public setCamera(type:string) {

    if(type == 'orthographic') {
      SceneManager.activeCamera = CameraType.ORTHOGRAPHIC
      SceneManager.orthographic.position.set(0, 0, 2)
    }
    else if(type == 'perspective') 
      SceneManager.activeCamera = CameraType.PERSPECTIVE

    SceneManager.orbitCamera = SceneManager.currentCamera
  }


  public mouseenterUI() {
    
    this.UIHidden = this.objCtrl.dragObj
  }

  public onMouseDown(e) {

    this.dragWindow.onMouseDown(e)
    
  }

  public onMouseMove(e) {
    
    this.dragWindow.onMouseMove(e)
  }
  
  public onMouseUp(e) {
    
    this.dragWindow.onMouseUp(e)
  }

  
  public onkeydown(e) {


  }

  
  public onkeyup(e: KeyboardEvent) {

    console.log(e)
    if(e.key == ' ' && e.code == 'Space') {

      this.theremin.toggleOnOff()
    }
    else if(e.key == 'p' && e.code == 'KeyP') {

      this.theremin.toggleOnOff()
    }
  }


  public onResize() {

    this.sm.resize()
  }



  private serializeIn(file: string) {

    if(file == undefined) return

    let obj: {} = JSON.parse(file)

    console.log('Ser',obj)

    if(obj['theremin']) this.theremin.serializeIn(obj['theremin'])

    if(obj['beatmachine']) {

      BeatMachine.bpm = obj['beatmachine']['bpm']
      BeatMachine.beats = obj['beatmachine']['beats']
      BeatMachine.noteDuration = obj['beatmachine']['noteDuration']
    }
  }

  private serializeOut() {

    let samples: {}[] = []
    for(let s of BeatMachine.samplesInQueue) {
      samples.push(s.serializeOut())
    }

    let obj: {} = {
      theremin: this.theremin.serializeOut(),
      beatmachine: {
        bpm: BeatMachine.bpm,
        beats: BeatMachine.beats,
        noteDuration: BeatMachine.noteDuration,
        samples: samples
      }
    }

    return JSON.stringify(obj)
  }



  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {

    this.ngOnDestroy()
  }
  
  @HostListener('window:blur', ['$event'])
  onWindowblur($event: any) {

    this.stopLoop()
  }
  
  @HostListener('window:focus', ['$event'])
  onWindowFocus($event: any) {

    if(Globals.VR) this.loop()
  }
    
  ngOnDestroy() {

    this.stopLoop()

    Storage.save(this.serializeOut())
  }
}
