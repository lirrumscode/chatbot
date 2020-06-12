import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbootPage } from './chatboot.page';

const routes: Routes = [
  {
    path: '',
    component: ChatbootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbootPageRoutingModule {}
