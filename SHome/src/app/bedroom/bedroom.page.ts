import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.page.html',
  styleUrls: ['./bedroom.page.scss'],
})
export class BedroomPage implements OnInit {
  temperatura2: number;
  nivelGaz2: string;
  umiditatea2: number;
 
  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  

  

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(2).subscribe((res) => {
        this.temperatura2 = res.temperatura
        this.umiditatea2 = res.umiditatea
        this.nivelGaz2 = res.nivelGaz
      })
    }, 2000);

 
    
  }

  switchOn(){
    this.switchService.rooms2ONGet().subscribe(()=>{});
    
  }

  switchOff(){
    this.switchService.rooms2OFFGet().subscribe(()=>{});
    
  }


}



