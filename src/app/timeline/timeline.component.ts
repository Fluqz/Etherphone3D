import { Component, AfterViewInit, ElementRef, Input, ViewChildren, ViewChild } from '@angular/core';
import { ObjectControl } from '../object-control';
import { Theremin3D } from '../theremin/theremin3D';
import { Sound3D } from '../theremin/sound-entity-3d';
import { Sample } from './sample';
import { SampleView } from './sample.component';
import { ChannelMenu } from './channel.component';
import { BeatMachine } from '../beat-machine';



@Component({
  selector: 'timeline', // TIMELINE NEEDS TO HAVE A BEAT MARKING LIKE A TAKT. MAYBE MAKE IT EXPANDABLE BUT BEGIN WITH 4/4 
                        // INSIDE THE TIMELINE ARE ALL THE INSTRUMENTS IN THIS CASE THE SAMPLES WHICH ARE ALL THE NOTES OR CHORDS WITHOUT A PARENT
                        // EACH INSTRUMENT HAS ITS OWN DRAW LINE
  template: `  
  
    <div style="margin: 15px 0px;">

        <button *ngIf="theremin3D" (click)="play()">{{ theremin3D.isPlaying ? 'Pause' : 'Play' }}</button>

        <input type="number" [value]="bpm" (change)="setBPM($event.target.value)" />

        <input type="number" [value]="beats" (change)="setBeats($event.target.value)" />
    </div>
  
    <div id="timeline-wrapper">

        <div id="timeline-wrapper">

            <div id="timeline-pointer"></div>

            <div id="timeline">
                <div *ngFor="let beat of beatsArray" class="beat-marking" [style.left.%]="beat*(100/beats)"></div>
            </div>
            
            <channel #channel *ngFor="let sound of sounds" [sound]="sound" [beats]="beats" class="channel-timeline"></channel>

        </div>

    </div>

  `,
  styles: [
    `
    :host {
        
        display:block;    
        width: 100%;
        height: auto;
        padding: 20px;
        background-color: #0c1614;
        color: #fefefe;
    
        resize: vertical;
        overflow: auto;
    }

    #timeline-wrapper {

        position: relative;
        width: 80%;
        heigh: 100%;
        background-color: #dadada;
        color: #000;

    }

    #timeline-pointer {

        width: 1px;
        height: 100%;
        background-color: #000;

    }

    #timeline {
        position: absolute;
        top: -10px;
        width: calc(100% - 50px);
        height: 10px;
        margin-left: 50px;
        background-color: #FFaa00;
    }


    .beat-marking {
        position: absolute;
        top: 0px;
        width: 1px;
        height: 100%;
        background-color: #000;
    }

    `
  ]
})
export class TimelineMenu implements AfterViewInit{

    @Input('theremin3D') theremin3D: Theremin3D
    @Input('objCtrl') objCtrl: ObjectControl

    @ViewChildren('channel', {read: ChannelMenu}) private channels: ChannelMenu[]
    
    public _samples: Sample[] = []

    private host: HTMLElement


    constructor(private hostRef:ElementRef) {


      this.host = this.hostRef.nativeElement

    //   this.channelEles.forEach((ele, index) => {

        // let createionZone = ele.querySelector('.creation-click-zone')


        // let callback = this.createSampleFrame(this.channels[index])
        // createionZone.addEventListener('click', callback, false)
    //   });

    }

    ngAfterViewInit() {


    }

    get sounds() {

        let sounds: Sound3D[] = []

        this.theremin3D.sounds3D.forEach(sound => {

            if(sound.ctrl.parent == null) sounds.push(sound)
        })
        
        return sounds
    }

    // SAMPLE DOESNT KNOW ITS LENGTH OR SCHEDULE TIME ??
    get samples() {

        if(!this.channels) return

        this._samples = []

        this.channels.forEach(channel => {

            this._samples.push(...channel.samples)
        })

        return this._samples
    }

    togglePlay() {


    }

    public play() {

        BeatMachine.start(this.samples)
    }

    public pause() {

        BeatMachine.stop()
    }


    public get bpm() { return BeatMachine.bpm }
    public setBPM(bpm: number) {

        BeatMachine.bpm = bpm
    }

    public get beats() { return BeatMachine.beats }
    public get beatsArray() { 

        let array:number[] = []

        for(let i = 0; i < BeatMachine.beats; i++) array.push(i)

        return array
    }
    public setBeats(beats: number) {

        BeatMachine.beats = beats
    }
} 