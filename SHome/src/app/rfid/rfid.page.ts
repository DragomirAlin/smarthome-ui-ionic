import { Component, OnInit, ViewChild } from '@angular/core';
import { RfidService } from '../api/api/rfid.service'

@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.page.html',
  styleUrls: ['./rfid.page.scss'],
})
export class RfidPage implements OnInit {
 
  users =[];

  constructor(public rfidService : RfidService) { }

  ngOnInit() {
    this.rfidService.rfidAllUserGet().subscribe(
      (response: any[])=>
      {
        this.users = response;
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

  
}
