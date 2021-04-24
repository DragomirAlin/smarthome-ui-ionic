import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

import { IonicModule } from '@ionic/angular';

import { AdministratorPage } from './administrator.page';

const routes: Routes = [
  {
    path: '',
    component: AdministratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  
    StreamingMedia
    
  ],
  declarations: [AdministratorPage]
})
export class AdministratorPageModule {}
