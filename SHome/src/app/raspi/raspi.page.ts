import { Component, OnInit } from '@angular/core';
import { MemoService } from '../api/api/memo.service'

@Component({
  selector: 'app-raspi',
  templateUrl: './raspi.page.html',
  styleUrls: ['./raspi.page.scss'],
})
export class RaspiPage implements OnInit {
  hostname : String;
  platform: String;

  constructor(public memoService : MemoService) { }

  ngOnInit() {


    this.memoService.memoGet().subscribe((res) => {
      //  this.memory = JSON.parse(JSON.stringify(res.datas));
      this.platform = res.platform;
      this.hostname = res.hostname;

    })
  }
}