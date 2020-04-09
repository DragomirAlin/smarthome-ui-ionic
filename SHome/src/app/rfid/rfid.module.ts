import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { RfidPage } from './rfid.page';

const routes: Routes = [
  {
    path: '',
    component: RfidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [RfidPage]
})
export class RfidPageModule {}
