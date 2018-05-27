import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LogementPage } from '../home/logement/logement';
import { LogementbisPage } from '../home/logementbis/logementbis';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logementPage() {
    this.navCtrl.push(LogementPage);
  }

  logementbisPage() {
    this.navCtrl.push(LogementbisPage);
  }


}

