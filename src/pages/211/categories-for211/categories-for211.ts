import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubcategoriesFor211Page } from '../subcategories-for211/subcategories-for211';

import { ReferNet211ServiceProvider } from '../../../providers/refer-net211-service/refer-net211-service';
import { CategoryFor211Model } from '../../../models/category-for-211'


/**
 * Generated class for the CategoriesFor211Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categories-for211',
  templateUrl: 'categories-for211.html',
})
export class CategoriesFor211Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private referNet211ServiceProvider: ReferNet211ServiceProvider) {}

  categories: CategoryFor211Model[];

  getParentLevelServices(): void {
    this.referNet211ServiceProvider.getCategoriesFor211Services().then(parent_services => this.categories = parent_services);
  }

  ionViewDidLoad() {
    this.getParentLevelServices();
    console.log('ionViewDidLoad CategoriesFor211Page');
  }

  openToSubcategory(category: CategoryFor211Model){
    this.navCtrl.push(SubcategoriesFor211Page, {selected_category: category});
  }

}