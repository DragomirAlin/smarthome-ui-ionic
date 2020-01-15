import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.page.html',
  styleUrls: ['./bathroom.page.scss'],
})
export class BathroomPage implements OnInit {
  temperatura1: number;
  nivelGaz1: string;
  umiditatea1: number;


  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  ngOnInit() {


    window.setInterval(() => {
      this.sensorService.dataId(3).subscribe((res) => {
        this.temperatura1 = res.temperatura
        this.umiditatea1 = res.umiditatea
        this.nivelGaz1 = res.nivelGaz
      })
  
    }, 2000);
    
  
  
  
  





  }


  
  switchOn(){
    this.switchService.rooms3ONGet().subscribe(()=>{});
  
  }

  switchOff(){
    this.switchService.rooms3OFFGet().subscribe(()=>{});
    
  }

}