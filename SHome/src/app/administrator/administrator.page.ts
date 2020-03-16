import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {

  usaIntrare: String;


  constructor(public sensorService: SensorService, public switchService : SwitchService, private streamingMedia: StreamingMedia) {  }

  ngOnInit() {


    window.setInterval(() => {
      this.sensorService.dataId(3).subscribe((res) => {
        this.usaIntrare = res.usaIntrare;
        
      })
   
    }, 2000);

  }

  play(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'portait',
      shouldAutoClose: true,
      controls: true
      
    };

    this.streamingMedia.playVideo("http://clips.vorwaerts-gmbh.de/VfE_html5.mp4", options);
  }

  

}
