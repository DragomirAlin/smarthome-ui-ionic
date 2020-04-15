import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RfidService } from '../api/api/rfid.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public rfidService : RfidService) { }

  ngOnInit() {
  }

  register(f: NgForm) {
    this.rfidService.addRfid(f.value).subscribe((res)=>
      {
       
    })
    location.reload()

}

}
