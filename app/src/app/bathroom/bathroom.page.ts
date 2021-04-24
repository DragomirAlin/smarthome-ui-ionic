import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.page.html',
  styleUrls: ['./bathroom.page.scss'],
})
export class BathroomPage implements OnInit {
  temperatura3: number;
  nivelGaz3: string;
  umiditatea3: number;
  apa3: string;


  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(3).subscribe((res) => {
        this.temperatura3 = res.temperatura
        this.umiditatea3 = res.umiditatea
        this.nivelGaz3 = res.nivelGaz
        this.apa3 = res.apa;
      })
    }, 2000);
  }

  switchOn(){
    this.switchService.rooms3ONGet().subscribe((res)=>{});
  }

  switchOff(){
    this.switchService.rooms3OFFGet().subscribe((res)=>{});
  }

}