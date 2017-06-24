import { Component } from '@angular/core';

import { Toggle, IonicPage } from 'ionic-angular';

import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(private settingsService: SettingsService) {}

    onToggle(toggle: Toggle) {
        this.settingsService.setBackground(toggle.checked);
    }

    checkAltBackground() {
        return this.settingsService.getBackground();
    }

}
