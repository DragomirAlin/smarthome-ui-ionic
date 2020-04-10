import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'administrator', loadChildren: './administrator/administrator.module#AdministratorPageModule' },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerPageModule' },
  { path: 'bedroom', loadChildren: './bedroom/bedroom.module#BedroomPageModule' },
  { path: 'kitchen', loadChildren: './kitchen/kitchen.module#KitchenPageModule' },
  { path: 'bathroom', loadChildren: './bathroom/bathroom.module#BathroomPageModule' },  { path: 'raspi', loadChildren: './raspi/raspi.module#RaspiPageModule' },
  { path: 'rfid', loadChildren: './rfid/rfid.module#RfidPageModule' },
  { path: 'logs', loadChildren: './logs/logs.module#LogsPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
