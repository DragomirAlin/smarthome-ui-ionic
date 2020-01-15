import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.page.html',
  styleUrls: ['./bedroom.page.scss'],
})
export class BedroomPage implements OnInit {
  temperatura3: number;
  nivelGaz3: string;
  umiditatea3: number;
 
  constructor(public sensorService: SensorService) {  }

  

  

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(1).subscribe((res) => {
        this.temperatura3 = res.temperatura
        this.umiditatea3 = res.umiditatea
        this.nivelGaz3 = res.nivelGaz
      })
    }, 2000);

 
    
  }

}



