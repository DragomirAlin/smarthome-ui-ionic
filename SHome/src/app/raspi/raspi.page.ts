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
  localaddress : String;
  localport: String;

  constructor(public raspiService : RaspiService) { }

  ngOnInit() {


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
      this.free = res.free;
    })

    this.raspiService.processLoadGet().subscribe((res) =>{
      this.currentSystem = res.currentsystem;
    })

    this.raspiService.netConGet().subscribe((res)=>{
      this.localaddress = res.localaddress;
      this.localport = res.localport;
    })

  }
}