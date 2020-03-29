import { Component, OnInit } from '@angular/core';
import { SensorService } from '../api';
import { SwitchService } from '../api/api/switch.service';
import { ActionSheetController } from '@ionic/angular';
import { MemoService } from '../api/api/memo.service'




@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {
  usaIntrare: String;
  memory : String;

  constructor(public actionSheetController: ActionSheetController,  public sensorService: SensorService, public switchService : SwitchService, public memoService : MemoService) {  }

  ngOnInit() {
    window.setInterval(() => {
      this.sensorService.dataId(3).subscribe((res) => {
        this.usaIntrare = res.usaIntrare;
      })
    }, 2000);
    

    console.log("test");

    this.memoService.memoGet().subscribe((res) => {
    //  this.memory = JSON.parse(JSON.stringify(res.datas));
    this.memory = JSON.stringify(res.datas);

    
    })
   
    console.log("telelele" + this.memory);


  }
  stream(){
      document.location.href = "http://192.168.0.102:8080/stream"
  }
}
