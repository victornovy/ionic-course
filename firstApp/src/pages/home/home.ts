import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    usersPage = UsersPage;

  constructor(public navCtrl: NavController) {}

  // this is not necessary if you are using directives 
  onClickButton() {
      this.navCtrl.push(UsersPage);
  }

  onClickShop() {
      this.navCtrl.push(ShopPage);
  }

}
