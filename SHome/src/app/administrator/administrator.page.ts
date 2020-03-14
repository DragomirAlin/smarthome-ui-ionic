import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {

  usaIntrare: String;


  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  ngOnInit() {


    window.setInterval(() => {
      this.sensorService.dataId(3).subscribe((res) => {
        this.usaIntrare = res.usaIntrare;
        
      })
   
    }, 2000);


  }

}
