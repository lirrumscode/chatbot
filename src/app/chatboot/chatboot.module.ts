import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbootPageRoutingModule } from './chatboot-routing.module';

import { ChatbootPage } from './chatboot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbootPageRoutingModule
  ],
  declarations: [ChatbootPage]
})
export class ChatbootPageModule {}
