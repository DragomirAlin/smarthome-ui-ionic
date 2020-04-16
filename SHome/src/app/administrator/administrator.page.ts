import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';
import { ActionSheetController } from '@ionic/angular';
import { RaspiService } from '../api/api/raspi.service'




@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  usaIntrare: String;
  memory : String;

  constructor(public actionSheetController: ActionSheetController,  public sensorService: SensorService, public switchService : SwitchService, public memoService : RaspiService) {  }

  ngOnInit() {



  }
  stream(){
      document.location.href = "http://192.168.0.102:8080/stream"
  }
}
