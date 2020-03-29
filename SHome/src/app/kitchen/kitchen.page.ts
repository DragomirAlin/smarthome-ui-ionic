import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api/api/sensor.service';
import { SwitchService } from '../api/api/switch.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
})
export class KitchenPage implements OnInit {
  temperatura1: number;
  nivelGaz1: string;
  umiditatea1: number;
  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(1).subscribe((res) => {
        this.temperatura1 = res.temperatura
        this.umiditatea1 = res.umiditatea
        this.nivelGaz1 = res.nivelGaz
      })
    }, 2000);
  }

  switchOn(){
    this.switchService.rooms1ONGet().subscribe(()=>{});
  }

  switchOff(){
    this.switchService.rooms1OFFGet().subscribe(()=>{});
  }
}

