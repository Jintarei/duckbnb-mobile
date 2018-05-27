import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ModifPage } from '../profile/modif/modif';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {

    selected : any = '';
    items : any = [];
    constructor(public navCtrl: NavController) {
        this.items = [
            {'title':'Bitcoin', 'pourcent':'80', 'price':'5000€'},
            {'title':'Ethereum', 'pourcent':'54', 'price':'500€'},
            {'title':'Ripple', 'pourcent':'93', 'price':'0.4€'}
        ];
    }

    itemSelected(item) {
        this.selected =item;
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilePage');
    }
    gotoHome() {
        this.navCtrl.push(HomePage, {
            un_parametre: 'Je suis un paramètre'
        });

    }
    modifProfile() {
        this.navCtrl.push(ModifPage, {
            un_parametre: 'Je suis un paramètre'
        });
    }
}