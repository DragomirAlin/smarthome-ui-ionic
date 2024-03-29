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
  usa: string;
  aer: number;
  plante:string;
 
  constructor(public sensorService: SensorService, public switchService : SwitchService) {  }

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(2).subscribe((res) => {
        this.temperatura2 = res.temperatura
        this.umiditatea2 = res.umiditatea
        this.nivelGaz2 = res.nivelGaz
        this.aer = res.aer;
      })

      this.sensorService.dataId(3).subscribe((res) =>{
        this.plante = res.plante;
      })

      this.sensorService.dataId(3).subscribe((res)=>{
        this.usa = res.usa;
      })

    }, 1000);
  }

  switchOn(){
    this.switchService.rooms2ONGet().subscribe(()=>{});
  }

  switchOff(){
    this.switchService.rooms2OFFGet().subscribe(()=>{});
  }

  coolerOn(){
    this.switchService.getONcooler().subscribe(()=>{});
  }

  coolerOff(){
    this.switchService.getOFFcooler().subscribe(()=>{});
  }


}




