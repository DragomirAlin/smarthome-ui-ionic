import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';


@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.page.html',
  styleUrls: ['./bathroom.page.scss'],
})
export class BathroomPage implements OnInit {
  temperatura1: number;
  nivelGaz1: string;
  umiditatea1: number;

  temperatura3: number;
  nivelGaz3: string;
  umiditatea3: number;

  constructor(public sensorService: SensorService) { }

  ngOnInit() {


    window.setInterval(() => {
      this.sensorService.dataId(1).subscribe((res) => {
        this.temperatura1 = res.temperatura
        this.umiditatea1 = res.umiditatea
        this.nivelGaz1 = res.nivelGaz
      })
  
    }, 2000);
    
  
  
    window.setInterval(() => {
      this.sensorService.dataId(3).subscribe((res) => {
        this.temperatura3 = res.temperatura
        this.umiditatea3 = res.umiditatea
        this.nivelGaz3 = res.nivelGaz
      })
    }, 2000);
    
    }
  





  }


