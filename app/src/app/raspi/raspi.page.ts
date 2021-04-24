import { Component, OnInit } from '@angular/core';
import { RaspiService } from '../api/api/raspi.service'


@Component({
  selector: 'app-raspi',
  templateUrl: './raspi.page.html',
  styleUrls: ['./raspi.page.scss'],
})
export class RaspiPage implements OnInit {
  hostname : String;
  platform: String;
  ip4 : String;
  speed: String;
  dhcp: String;
  free: String;
  currentSystem : String;
  ssid : String;
  signal: String;
  quality: String;
  total : String;
  used: String;
  temp: String;
  

  constructor( public raspiService : RaspiService) { 
   
  }

  ngOnInit() {

    window.setInterval(() => {
    this.raspiService.osInfoGet().subscribe((res) => {
      this.platform = res.platform;
      this.hostname = res.hostname;

    })

    this.raspiService.netGet().subscribe((res) =>{
      this.ip4 = res.ip4;
      this.speed = res.speed;
      this.dhcp = res.dhcp;
    })

    
      this.raspiService.memoryGet().subscribe((res) =>{
        var f1 = res.free;
      this.free = f1.substring(0, 4);
        var u1 = res.used
      this.used = u1.substring(0, 3);
    })

    this.raspiService.processLoadGet().subscribe((res) =>{
      this.currentSystem = res.currentsystem;
    })

    this.raspiService.netConGet().subscribe((res)=>{
      this.ssid = res.ssid;
      this.signal = res.signal;
      this.quality = res.quality;
    })

    this.raspiService.cpuGet().subscribe((res)=>{
      var t1 = res.main;
      this.temp = t1.substring(0, 4);
    })

  
  }, 1000)
  }

  refresh(): void {
    window.location.reload();
}
}