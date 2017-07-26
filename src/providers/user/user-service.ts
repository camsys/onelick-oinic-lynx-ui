import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';

import { User }          from '../../models/user';
import { OneClickProvider } from '../../providers/one-click/one-click';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class UserServiceProvider {

  user: User;
  constructor(private http: Http,
              private oneClickProvider: OneClickProvider) {
  }


  //This method is not the ideal user option, I believe any changes made to the user this way will not propogate across pages.
  getUser(){
//    console.log(this.oneClickProvider.getTestProfile());


    this.oneClickProvider.getTestProfile().then(ocp => console.log(ocp));
  
    if(this.user == null)
    {
      this.user = new User;
      this.user.firstName = 'TEST_FIRST_NAME';
      this.user.lastName = 'TEST_last_NAME';
      this.user.email = "fakeEmail@example.com"
      this.user.userId = 123;
      this.user.location = 'TEST_locATION';
    }

    return this.user;
  }

  setUserLocation(location : string){
    this.user.location = location;
  }



}
