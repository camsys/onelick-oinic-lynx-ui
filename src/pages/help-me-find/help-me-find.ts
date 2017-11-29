import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from 'ionic-angular';
import { environment } from '../../app/environment';

import { UserLocatorPage }    from '../user-locator/user-locator';

// PROVIDERS
import { OneClickProvider } from '../../providers/one-click/one-click';

// MODELS
import { Alert } from '../../models/alert';

import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the HelpMeFindPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-help-me-find',
  templateUrl: 'help-me-find.html',
})
export class HelpMeFindPage {

  alerts: Alert[];

  awsImageLocation;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform,
              private alertCtrl: AlertController,
              public oneClickProvider: OneClickProvider,
              public sanitizer: DomSanitizer,
              public translate: TranslateService) {
  }

  ionViewDidLoad() {
    this.awsImageLocation = this.sanitizer.bypassSecurityTrustStyle('url(' + environment.AWS_IMAGE_ASSET_BUCKET + 'find-page-background.jpg)');
    console.log(this.awsImageLocation);
    // Wait until after platform is ready, so we have the user's preferred locale
    this.platform.ready().then(() => {
      this.oneClickProvider.getAlerts()
        .then(alerts => this.alerts = alerts);
    });
  }

  openResourcesPage() {
    this.navCtrl.push(UserLocatorPage, { findServicesView: true});
  }

  openTransportationPage() {
    this.navCtrl.push(UserLocatorPage, { findServicesView: false});
  }

  presentAlerts() {

    document.getElementById('messages-button').style.display = "none";

    for(let entry of this.alerts) {
      console.log(entry);
      let alert = this.alertCtrl.create({
        title: entry.subject,
        subTitle: entry.message,
        buttons: [{
          text: 'OK',
          handler: () => {
            this.ackAlert(entry);
          }
        }]
      });
      alert.present();
    }
  }

  ackAlert(alert: Alert){
    this.oneClickProvider.ackAlert(alert);
  }

}
