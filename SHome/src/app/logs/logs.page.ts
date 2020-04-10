import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogsService } from '../api/api/logs.service'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LogsPage implements OnInit {
  public columns: any;
  public rows: any;


  constructor(public rfidService : LogsService) {
    this.columns = [
      { name: 'nume' },
      { name: 'data' }, 
      { name:'uid'}
    ];
   }

  ngOnInit() {
    this.rfidService.rfidAllLogsGet().subscribe(
      (response: any[])=>
      {
        
        this.rows = response;
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

}
