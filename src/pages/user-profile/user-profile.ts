import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

// MODELS
import {User} from '../../models/user';
import {Eligibility} from '../../models/eligibility';
import {Accommodation} from '../../models/accommodation';
import {TripType} from '../../models/user';

// PROVIDERS
import { OneClickProvider } from '../../providers/one-click/one-click';

// PAGES
import { SignInPage }  from '../sign-in/sign-in';


/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  user: User;
  eligibilities: Eligibility[];
  accommodations: Accommodation[];
  trip_types: TripType[];
  filtered_trip_types: TripType[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public oneClickProvider: OneClickProvider) {
  }

  ionViewDidLoad() {
    this.oneClickProvider.getProfile()
    .then(usr => this.user = usr)
    .then(usr => this.eligibilities = this.user.eligibilities)
    .then(usr => this.accommodations = this.user.accommodations)
    .then(usr => this.trip_types = this.user.trip_types)
    .then(usr => this.filterTripTypes())
    .catch((error) => this.handleError(error))
  }

  updateProfile() {
    this.user.eligibilities = this.eligibilities
    this.user.accommodations = this.accommodations
    this.user.trip_types = this.trip_types
    this.oneClickProvider.updateProfile(this.user)
    .then(usr => this.user = usr)
    .then(usr => this.eligibilities = this.user.eligibilities)
    .then(usr => this.accommodations = this.user.accommodations)
    .then(usr => this.trip_types = this.user.trip_types)
    .then(usr => this.filterTripTypes())
    .catch((error) => this.handleError(error))
  }

  filterTripTypes() {
    this.filtered_trip_types = [];
    var allowed = ["transit", "paratransit", "car", "taxi", "uber"];
    for (var i = 0; i < this.user.trip_types.length; i++) {
      if(allowed.indexOf(this.user.trip_types[i].code) > -1){
        this.filtered_trip_types.push(this.user.trip_types[i]);
      }
    }
    this.trip_types = this.filtered_trip_types;
    this.user.trip_types = this.filtered_trip_types;
  }
  
  handleError(error) {
    // If the user token is expired, redirect to the sign in page and display a notification
    if(error.status === 401) {
      console.error("USER TOKEN EXPIRED", error);
      this.navCtrl.push(SignInPage);
      this.toastCtrl.create({
        message: "Please sign in to continue.", 
        duration: 5000}
      ).present();
    } else {
      console.error(error);
    }
  }

}
