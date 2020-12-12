import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Selected } from './selected-menu/selected.component'
import { ChannelMenu } from './timeline/channel.component'
import { MixerMenu } from './mixer/mixer.component'
import { Dashboard } from './dashboard/dashboard.component'
import { TimelineMenu } from './timeline/timeline.component'
import { ThereminView } from './theremin/theremin.component'


@NgModule({
  declarations: [
    AppComponent,
    Selected,
    MixerMenu,
    ChannelMenu,
    Dashboard,
    TimelineMenu,
    ThereminView
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
