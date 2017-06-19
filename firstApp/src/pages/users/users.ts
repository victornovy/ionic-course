import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onLoadUser(name: string) {
      this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter() {
      console.log('ionViewCanEnter UsersPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  ionViewWillEnter() {
      console.log('ionViewWillEnter UsersPage');
  }

  ionViewDidEnter() {
      console.log('ionViewDidEnter UsersPage');
  }

  ionViewcanLeave() {
      console.log('ionViewcanLeave UsersPage');
  }

  ionViewWillLeave() {
      console.log('ionViewWillLeave UsersPage');
  }

  ionViewDidLeave() {
      console.log('ionViewDidLeave UsersPage');
  }

  ionViewWillUnload() {
      console.log('ionViewWillUnload UsersPage');
  }

}
