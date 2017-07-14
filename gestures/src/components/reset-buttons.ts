import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'reset-buttons',
    templateUrl: './reset-buttons.html'
})
export class ResetButtonsComponent {

    @Output() public onResetAll = new EventEmitter();
    @Output() public onResetTaps = new EventEmitter();
    @Output() public onResetPresses = new EventEmitter();

    constructor() { }

    resetAll(event) {
        this.onResetAll.emit(event);
    }
    resetTaps(event) {
        this.onResetTaps.emit(event);
    }
    resetPresses(event) {
        this.onResetPresses.emit(event);
    }
}