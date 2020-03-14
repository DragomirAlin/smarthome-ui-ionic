import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Mai mult',
      buttons: [{
        text: 'Facebook',
        role: 'destructive',
        icon: 'logo-facebook',
        handler: () => {
          document.location.href = "https://www.facebook.com/DarkAngeL.Ro"
        }
      }, {
        text: 'LinkedIn',
        icon: 'logo-linkedin',
        handler: () => {
          document.location.href = "https://www.linkedin.com/in/dragomir-daniel-alin-4b04b7171/"
        }
      }, {
        text: 'Youtube',
        icon: 'logo-youtube',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Contact',
        icon: 'contact',
        handler: () => {
          document.location.href = "dragomirdanielalin@gmail.com"

        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }




}
