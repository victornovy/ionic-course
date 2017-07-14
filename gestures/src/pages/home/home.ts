import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public tapped: number = 0;
    public pressed: number = 0;
    public won: Boolean = false;
    public youWon: String = 'U won!';
    public challenge: String = 'Tap twice, press four times';

    constructor(public navCtrl: NavController) { }

    tapEvent() {
        this.tapped++;
        this.checkWon();
    }

    pressEvent() {
        this.pressed++;
        this.checkWon();
    }

    resetAll() {
        this.resetTaps();
        this.resetPresses();
        this.checkWon();
    }

    resetTaps() {
        this.tapped = 0;
        this.checkWon();
    }

    resetPresses() {
        this.pressed = 0;
        this.checkWon();
    }

    checkChallenge() {
        return this.pressed === 4 && this.tapped === 2;
    }

    checkWon() {
        this.won = this.checkChallenge();
    }

}
