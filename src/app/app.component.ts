import { Component, AfterViewInit, OnDestroy, HostListener, NgZone } from '@angular/core';

import { Theremin } from './theremin/theremin';
import { SceneManager, CameraType } from './scene-manager';
import { Theremin3D } from './theremin/theremin3D';
import { ObjectControl } from './object-control';
import { DragWindow } from './tools/drag-window';

import { Storage } from './storage'
import { BeatMachine } from './beatmachine/beat-machine';

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




    this.resizeEvent = this.onResize.bind(this)
    window.onresize = this.resizeEvent

    this.mouseDownEvent = this.onMouseDown.bind(this)
    document.addEventListener('mousedown', this.mouseDownEvent, false)

    this.mouseUpEvent = this.onMouseUp.bind(this)
    document.addEventListener('mouseup', this.mouseUpEvent, false)
    
    this.mouseMovevent = this.onMouseMove.bind(this)
    document.addEventListener('mousemove', this.mouseMovevent, false)

    
    this.keydownEvent = this.onkeydown.bind(this)
    document.addEventListener('keydown', this.keydownEvent, false)

    this.keyupEvent = this.onkeyup.bind(this)
    document.addEventListener('keyup', this.keyupEvent, false)
  }


  // private fixedUpdateTiming: number = 20;
  // private physicsTimeSimulated:number = Date.now();
  // private _deltaTime: number = 0;
  // private lastUpdate: number = Date.now();

  public loop(): void {

    // while(this.physicsTimeSimulated < Date.now()){

    //   this.fixedUpdate()
    //   this.physicsTimeSimulated += this.fixedUpdateTiming
    // }

    this.update()

    // this._deltaTime = Date.now() - this.lastUpdate;
    // this.lastUpdate = Date.now();

    this.zone.runOutsideAngular(()=> {
      this.AFID = window.requestAnimationFrame(this.loop.bind(this))
    })
  }

  private update() {
    // console.log('update')

    this.theremin.update()
    this.theremin3D.update()

    this.sm.update()
  }

  private fixedUpdate() {
    // console.log('fixed update')
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

    let obj: {} = JSON.parse(file)

    if(obj['theremin']) this.theremin.serializeIn(obj['theremin'])

    if(obj['beatmachine']) {

      BeatMachine.bpm = obj['beatmachine']['bpm']
      BeatMachine.beats = obj['beatmachine']['beats']
      BeatMachine.noteDuration = obj['beatmachine']['noteDuration']
    }
  }

  private serializeOut() {

    let samples: {}[] = []

    let obj: {} = {
      theremin: this.theremin.serializeOut(),
      beatmachine: {
        bpm: BeatMachine.bpm,
        beats: BeatMachine.beats,
        noteDuration: BeatMachine.noteDuration,
      }
    }

    return JSON.stringify(obj)
  }



  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {

    this.ngOnDestroy()
  }
    
  ngOnDestroy() {

    window.cancelAnimationFrame(this.AFID)

    Storage.save(this.serializeOut())
  }
}
