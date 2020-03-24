import { Component, AfterViewInit, OnDestroy, Input, ElementRef } from '@angular/core';

import * as THREE from 'three'
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin3D';
import { Channel } from '../channel';


@Component({
  selector: 'channel-menu',
  templateUrl: './channel.component.html',
})
export class ChannelMenu implements AfterViewInit{

    @Input('objCtrl') objCtrl: ObjectControl 
    @Input('theremin3D') theremin3D: Theremin3D

    public channels: Channel[] = []
    private host: HTMLElement

    private mouseDown: boolean = false

    private doubleClickEvent: any

    constructor(private hostRef:ElementRef) {

      this.host = this.hostRef.nativeElement

      this.channels.push(new Channel())
    }

    ngAfterViewInit() {


      this.doubleClickEvent = this.onDoubleClick.bind(this)
      this.host.addEventListener('dblclick', this.doubleClickEvent, false)

    }


    private onDoubleClick(e) {
      console.log('double click')

      this.channels.push(new Channel())
    }

    private onMouseUp(e) {
      console.log('MouseUp')
      
      this.mouseDown = false
      
      
    }
} 