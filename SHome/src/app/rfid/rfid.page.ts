import { Component, OnInit, ChangeDetectionStrategy,  Input } from '@angular/core';
import { RfidService } from '../api/api/rfid.service'
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.page.html',
  styleUrls: ['./rfid.page.scss'],
})
export class RfidPage implements OnInit {
 // MatPaginator Inputs
 length = 100;
 pageSize = 10;
 pageSizeOptions: number[] = [5, 10, 25, 100];

 // MatPaginator Output
 pageEvent: PageEvent;

 setPageSizeOptions(setPageSizeOptionsInput: string) {
   if (setPageSizeOptionsInput) {
     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
   }
 }



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
