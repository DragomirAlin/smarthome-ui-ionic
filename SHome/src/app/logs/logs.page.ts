import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogsService } from '../api/api/logs.service'
import { SensorService} from '../api/api/sensor.service'

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LogsPage implements OnInit {
  public columns: any;
  public rows: any;
  usa : string;

  constructor(public rfidService : LogsService, public sensorService : SensorService) {
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

    this.sensorService.dataId(3).subscribe((res)=>{
      this.usa = res.usa;
    })

  }

}
