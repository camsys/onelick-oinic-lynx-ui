import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatchListFor211Model } from '../../../models/match-list-for-211'

/**
 * Generated class for the ServicesFromMatchListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-services-from-match-list',
  templateUrl: 'services-from-match-list.html',
})
export class ServicesFromMatchListPage {

  matches: MatchListFor211Model[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.matches = navParams.data;
  }

  ionViewDidLoad() {
  }

  openServicePage(m : MatchListFor211Model){
    console.log(m);
  }
}
