import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api/api/sensor.service';
import { SwitchService } from '../api/api/switch.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.page.html',
  styleUrls: ['./kitchen.page.scss'],
})
export class KitchenPage implements OnInit {
  temperatura3: number;
  nivelGaz3: string;
  umiditatea3: number;
  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(1).subscribe((res) => {
        this.temperatura3 = res.temperatura
        this.umiditatea3 = res.umiditatea
        this.nivelGaz3 = res.nivelGaz
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

