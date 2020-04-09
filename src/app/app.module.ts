import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Selected } from './selected-menu/selected.component'
import { ChannelMenu } from './channel/channel.component'
import { MixerMenu } from './mixer/mixer.component'
import { Dashboard } from './dashboard/dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    Selected,
    MixerMenu,
    ChannelMenu,
    Dashboard,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
