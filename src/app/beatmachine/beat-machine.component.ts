import { Component, AfterViewInit, Input, ViewChildren } from '@angular/core';
import { Sound3D } from '../theremin/sound-entity-3d';
import { Theremin3D } from '../theremin/theremin3D';
import { BeatMachine } from './beat-machine';
import { Sample } from './sample';
import { TrackView } from './track.component';

@Component({
  selector: 'beatmachine', // TIMELINE NEEDS TO HAVE A BEAT MARKING LIKE A TAKT. MAYBE MAKE IT EXPANDABLE BUT BEGIN WITH 4/4 
                        // INSIDE THE TIMELINE ARE ALL THE INSTRUMENTS IN THIS CASE THE SAMPLES WHICH ARE ALL THE NOTES OR CHORDS WITHOUT A PARENT
                        // EACH INSTRUMENT HAS ITS OWN DRAW LINE
  template: `  

      
    <div style="margin: 15px 0px;">

      <div *ngIf="theremin3D" class="btn play" (click)="play()"></div>

      <div *ngIf="theremin3D" class="btn pause" (click)="pause()"></div>

      <input type="number" [value]="bpm" (change)="bpm = $event.target.value" />

      <input type="number" [value]="beats" (change)="beats = $event.target.value" />

      <select name="noteDuration" (change)="noteDuration = $event.target.value">

          <option value="1">1</option>
          <option value="1/2">1/2</option>
          <option value="1/4">1/4</option>
          <option value="1/8">1/8</option>
          <option value="1/16">1/16</option>
          <option value="1/32">1/32</option>
          <option value="1/64">1/64</option>

      </select>

    </div>

    

    <div id="timeline-wrapper">

        <div id="timeline-pointer" [style.left]=""></div>

        <div id="timeline">
            <div *ngFor="let beat of beatsArray" class="beat-marking" [style.left.%]="beat*(100/beats)"></div>
        </div>
        
        <div>
          <track #tracks *ngFor="let sound of sounds" [sound]="sound" [beats]="beats" class="track-timeline" />
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
      color: #fefefe;
  
      resize: vertical;
      overflow: auto;
    }


    #timeline-wrapper {

      position: relative;
      width: 80%;
      height: 100%;
      color: #000;
    }

    #timeline-pointer {
      position:absolute;
      top: 0px;
      margin-left: 50px;

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
  ],

})
export class BeatMachineView implements AfterViewInit {

  @Input('theremin3D') theremin3D: Theremin3D
  @ViewChildren('tracks', {read: TrackView}) private tracks: TrackView[]

  public _samples: Sample[] = []

  ngAfterViewInit() {
    
  }



  public play() {

    //Theremin.togglePlay(false)

    this.sounds.forEach(sound => {

      sound.ctrl.stop()
    })
    BeatMachine.stop()
    BeatMachine.start(this.samples)
  }

  public pause() {

      BeatMachine.stop()
  }

  // SAMPLE DOESNT KNOW ITS LENGTH OR SCHEDULE TIME ??
  get samples() {

    if(!this.tracks) return

    this._samples = []

    this.tracks.forEach(track => {

        this._samples.push(...track.samples)
    })

    return this._samples
  }

  get sounds() {

      let sounds: Sound3D[] = []

      this.theremin3D.sounds3D.forEach(sound => {

          if(sound.ctrl.parent == null) sounds.push(sound)
      })
      
      return sounds
  }

  // public get currentBeat() { return BeatMachine.currentNote }

  public get bpm() { return BeatMachine.bpm }
  public set bpm(bpm: number) {

      BeatMachine.bpm = bpm
  }

  public get beats() { return BeatMachine.beats }
  public set beats(beats: number) { BeatMachine.beats = beats }

  public get beatsArray() { 

      let array:number[] = []

      for(let i = 0; i < BeatMachine.beats; i++) array.push(i)

      return array
  }

  public get noteDuration() { return BeatMachine.noteDuration }
  public set noteDuration(duration:string) {

    switch(duration) {
      case '1':
      case '1/2':
      case '1/4':
      case '1/8':
      case '1/16':
      case '1/32':
      case '1/64':
          BeatMachine.noteDuration = duration
        break
    }
  }
} 