import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
    quoteGroup: {category: string, quotes: Quote[], icon: string};

    constructor(private navParams: NavParams){}

    ionViewDidLoad() {
        this.quoteGroup = this.navParams.data;
    }

    onAddToFavorite() {
        console.log('Added to Favorite');
    }
}
