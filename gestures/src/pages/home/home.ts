import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public tapped: number = 0;
    public pressed: number = 0;
    public youWon: String = 'U won!';
    public challenge: String = 'Tap twice, press four times';

    constructor(public navCtrl: NavController) { }

    tapEvent() {
        this.tapped++;
    }

    pressEvent() {
        this.pressed++;
    }

    resetAll() {
        this.resetTaps();
        this.resetPresses();
    }

    resetTaps() {
        this.tapped = 0;
    }

    resetPresses() {
        this.pressed = 0;
    }

    checkChallenge() {
        return this.pressed === 4 && this.tapped === 2;
    }

}
