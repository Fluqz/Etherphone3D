import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Channel } from '../channel/channel';
import { Mixer } from './mixer';



@Component({
  selector: 'mixer',
  template: ` 
  
  
  <div id="mixer-menu-wrapper">

    <div class="drag-bar"></div>

    <channel *ngFor="let channel of channels" [channel]="channel"></channel>

  </div>
  


  `,
  styles: [
    `
    :host {

      position: absolute;
      left: 0px;
      top: 0px;
  
      width: 200px;
      height: 800px;
      background-color: #0c1614;
      color: #fefefe;
  
      resize: vertical;
      overflow: auto;
    }
    `
  ]
})
export class MixerMenu implements AfterViewInit{

    @Input('objCtrl') objCtrl: ObjectControl 
    @Input('theremin3D') theremin3D: Theremin3D
    
    private host: HTMLElement

    public mixer: Mixer
    
    public get channels() { return this.mixer.channels }


    private doubleClickEvent: any

    constructor(private hostRef:ElementRef) {

      this.mixer = new Mixer() 

      this.host = this.hostRef.nativeElement

      this.doubleClickEvent = this.onDoubleClick.bind(this)
      this.host.addEventListener('dblclick', this.doubleClickEvent, false)
    }

    ngAfterViewInit() {


    }


    public addChannel() {

      this.mixer.addChannel()
    }    
    
    public removeChannel(channel: Channel) {

      this.mixer.removeChannel(channel)
    }    
    



    private onDoubleClick(e) {

      this.addChannel()
    }

} 