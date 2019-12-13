import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.page.html',
  styleUrls: ['./bedroom.page.scss'],
})
export class BedroomPage implements OnInit {

  constructor(public sensorService: SensorService) { 



    
  }

  

  ngOnInit() {
    this.sensorService.dataId(3).subscribe((res) => console.log('The data sensor is', res)); 
    /// aici
  }

//   adaptare event with ngStyle
//$('.cube-switch .switch').click(function() {
//     if ($('.cube-switch').hasClass('active')) {
//         $('.cube-switch').removeClass('active');
//         $('#light-bulb2').css({'opacity': '0'});
//     } else {
//         $('.cube-switch').addClass('active');
//         $('#light-bulb2').css({'opacity': '1'});
//     }
// });

  
}

