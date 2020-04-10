import { Component, OnInit, ChangeDetectionStrategy,  Input } from '@angular/core';
import { RfidService } from '../api/api/rfid.service'
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.page.html',
  styleUrls: ['./rfid.page.scss'],
})
export class RfidPage implements OnInit {
  public columns: any;
  public rows: any;

  constructor(public rfidService : RfidService) {
    this.columns = [
      { name: 'uid' },
      { name: 'nume' }, 
    ];
   }

  ngOnInit() {
    this.rfidService.rfidAllUserGet().subscribe(
      (response: any[])=>
      {
        
        this.rows = response;
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

  
}
