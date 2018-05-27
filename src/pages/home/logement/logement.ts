import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home';
/**
 * Generated class for the Logement page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logement',
  templateUrl: 'logement.html',
})
export class LogementPage {
    constructor(public navCtrl: NavController) {}
    ionViewDidLoad() { console.log('ionViewDidLoad LogementPage');}
    
}
