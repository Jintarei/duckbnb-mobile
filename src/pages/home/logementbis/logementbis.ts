import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


import { HomePage } from '../home';
/**
 * Generated class for the Logement2 page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logementbis',
  templateUrl: 'logementbis.html',
})
export class LogementbisPage {
    constructor(public navCtrl: NavController) {}
    ionViewDidLoad() { console.log('ionViewDidLoad LogementbisPage');}

}

export class MyPage {
  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoading():void {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
