import { Component, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';

import * as THREE from 'three'
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Channel } from './channel';
import { Sample } from '../sample/sample';


@Component({
  selector: 'channel',
  template: `
  
  <div class="channel-inner">

    Channel
    <sample></sample>

  </div>
  

  `,
})
export class ChannelMenu implements AfterViewInit{

    // @Input('objCtrl') objCtrl: ObjectControl 
    // @Input('theremin3D') theremin3D: Theremin3D
    @Input('channel') public channel: Channel

    public set samples(val: Sample[]) {}
    public activeSample: Sample

    private host: HTMLElement

    private mouseDown: boolean = false

    private doubleClickEvent: any

    constructor(private hostRef:ElementRef) {

      this.host = this.hostRef.nativeElement
    }

    ngAfterViewInit() {

      this.doubleClickEvent = this.onDoubleClick.bind(this)
      this.host.addEventListener('dblclick', this.doubleClickEvent, false)
    }


    public addSample() {

      return this.samples[this.samples.push(new Sample()) - 1]
    }

    public removeSample(sample: Sample) {

      let i = this.samples.indexOf(sample)
      return this.samples.splice(i, 1)
    }

    
    private onDoubleClick(e) {

      this.addSample()
    }

    private onMouseDown(e) {
      console.log('MouseUp')
      
      this.mouseDown = true
    }

    private onMouseUp(e) {
      console.log('MouseUp')
      
      this.mouseDown = false
    }
} 