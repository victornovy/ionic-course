import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})

export class BuyoutPage implements OnInit {
    itemName: string = 'None';

    constructor(private navCtrl: NavController, private navParams: NavParams) {}

    ngOnInit() {
        this.itemName = this.navParams.get('itemName');
    }

    onClickBuyItem() {
        this.navCtrl.popToRoot();
    }
}
