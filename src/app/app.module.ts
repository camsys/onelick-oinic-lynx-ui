// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';
import { ElasticModule } from 'angular2-elastic';
import { DatePicker } from '@ionic-native/date-picker';

// Ionic Imports
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';

// Other 3rd-Party Imports

// Translations
// import { TranslateModule } from "ng2-translate";
// import { TranslateLoader, TranslateStaticLoader } from "ng2-translate"
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http: Http){
  // return new TranslateStaticLoader(http, 'assets/i18n', '.json');
  // return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
  return new TranslateHttpLoader(http, 'https://s3.amazonaws.com/occ-lynx-qa/i18n/', '.json');
}

// Ratings
import { Ionic2RatingModule } from 'ionic2-rating'; // https://www.npmjs.com/package/ionic2-rating

// Pages
import { MyApp } from './app.component';
import { HelpMeFindPage }          from '../pages/help-me-find/help-me-find';
import { CategoriesFor211Page }    from '../pages/211/categories-for211/categories-for211';
import { SubcategoriesFor211Page } from '../pages/211/subcategories-for211/subcategories-for211';
import { ServicesMapPage } from '../pages/211/services-map/services-map';
import { ServicesListPage } from '../pages/211/services-list/services-list';
import { UserLocatorPage }  from '../pages/user-locator/user-locator';
import { ServiceFor211DetailPage } from '../pages/211/service-for211-detail/service-for211-detail'
import { TransportationAgenciesPage } from '../pages/transportation-agencies/transportation-agencies';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DirectionsPage } from '../pages/directions/directions';
import { DirectionsOptionsPage } from '../pages/directions-options/directions-options';
import { DirectionsRouteDetailPage } from '../pages/directions-route-detail/directions-route-detail';
import { DirectTransporationFinderPage } from '../pages/direct-transporation-finder/direct-transporation-finder';
import { TransportationEligibilityPage } from '../pages/transportation-eligibility/transportation-eligibility';
import { SignInPage } from '../pages/sign-in/sign-in';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SubSubcategoriesFor211Page } from '../pages/211/sub-subcategories-for211/sub-subcategories-for211';
import { ServicesPage } from '../pages/211/services/services';
import { TaxiTransportationPage } from '../pages/taxi-transportation/taxi-transportation';
import { FeedbackModalPage } from '../pages/feedback-modal/feedback-modal';

// Providers
import { OneClickProvider } from '../providers/one-click/one-click';
import { AuthProvider } from '../providers/auth/auth';
import { GeocodeServiceProvider } from '../providers/google/geocode-service';
import { GoogleMapsHelpersProvider } from '../providers/google/google-maps-helpers';
import { HelpersProvider } from '../providers/helpers/helpers';

// Models
import { CategoryFor211Model } from '../models/category-for-211';
import { SubcategoryFor211Model } from '../models/subcategory-for-211';
import { SubSubcategoryFor211Model } from '../models/sub-subcategory-for-211';
import { ServiceModel } from '../models/service';
import { AgencyModel } from '../models/agency';
import { AddressComponentModel } from '../models/address-component';
import { LocationModel } from '../models/location';
import { TripModel } from "../models/trip";
import { TripRequestModel } from "../models/trip-request";
import { ItineraryModel } from "../models/itinerary";
import { LegModel } from "../models/leg";
import { LegGeometryModel } from "../models/leg-geometry";
import { LegStepModel } from "../models/leg-step";
import { PageModel } from "../models/page";
import { SearchResultModel } from "../models/search-result";

// Pipes
import { PrettyTimePipe } from '../pipes/pretty-time';
import { PrettyDistancePipe } from '../pipes/pretty-distance';
import { ToStringPipe } from '../pipes/to-string';
import { FormatPhoneNumberPipe } from '../pipes/format-phone-number';
import { PrettyFarePipe } from '../pipes/pretty-fare';
import { ScheduleTimePipe } from '../pipes/schedule-time';
import { ScheduleDayPipe } from '../pipes/schedule-day';

// Components
import { PlaceSearchComponent } from '../components/place-search/place-search';
import { ResponsiveDatepickerComponent } from '../components/responsive-datepicker/responsive-datepicker';
import { ResponsiveTimepickerComponent } from '../components/responsive-timepicker/responsive-timepicker';
import { PrettyTableNamePipe } from '../pipes/pretty-table-name';
import { ServiceDetailsComponent } from '../components/service-details/service-details';

@NgModule({
  declarations: [
    MyApp,
    HelpMeFindPage,
    UserLocatorPage,
    CategoriesFor211Page,
    SubcategoriesFor211Page,
    SubSubcategoriesFor211Page,
    ServicesPage,
    TaxiTransportationPage,
    ServicesMapPage,
    ServicesListPage,
    ServiceFor211DetailPage,
    TransportationAgenciesPage,
    AboutUsPage,
    ContactUsPage,
    DirectTransporationFinderPage,
    DirectionsPage,
    DirectionsOptionsPage,
    DirectionsRouteDetailPage,
    TransportationEligibilityPage,
    ContactUsPage,
    SignInPage,
    UserProfilePage,
    FeedbackModalPage,
    PrettyTimePipe,
    PrettyDistancePipe,
    ToStringPipe,
    FormatPhoneNumberPipe,
    PlaceSearchComponent,
    PrettyFarePipe,
    ScheduleTimePipe,
    ScheduleDayPipe,
    ResponsiveDatepickerComponent,
    ResponsiveTimepickerComponent,
    PrettyTableNamePipe,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    TextMaskModule,
    ElasticModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelpMeFindPage,
    UserLocatorPage,
    CategoriesFor211Page,
    SubcategoriesFor211Page,
    SubSubcategoriesFor211Page,
    ServicesPage,
    TaxiTransportationPage,
    ServicesMapPage,
    ServicesListPage,
    TransportationAgenciesPage,
    AboutUsPage,
    ServiceFor211DetailPage,
    ContactUsPage,
    DirectTransporationFinderPage,
    DirectionsPage,
    DirectionsOptionsPage,
    DirectionsRouteDetailPage,
    TransportationEligibilityPage,
    ContactUsPage,
    SignInPage,
    UserProfilePage,
    FeedbackModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneClickProvider,
    GeocodeServiceProvider,
    GoogleMapsHelpersProvider,
    AuthProvider,
    HelpersProvider,
    CategoryFor211Model,
    SubcategoryFor211Model,
    SubSubcategoryFor211Model,
    ServiceModel,
    AgencyModel,
    AddressComponentModel,
    LocationModel,
    TripModel,
    TripRequestModel,
    // TripResponseModel,
    ItineraryModel,
    LegModel,
    LegGeometryModel,
    LegStepModel,
    PageModel,
    SearchResultModel,
    DatePicker
  ],
  exports: [
    CategoriesFor211Page,
    MapFor211ServicesPage,
    ServiceFor211DetailPage,
    ServiceFor211ReviewPage,
    ServicesPage,
    ServicesFromMatchListPage,
    SubSubcategoriesFor211Page,
    SubcategoriesFor211Page,
    AboutUsPage,
    ContactUsPage,
    DirectTransporationFinderPage,
    DirectionsPage,
    DirectionsOptionsPage,
    DirectionsRouteDetailPage,
    FeedbackModalPage,
    HelpMeFindPage,
    SignInPage,
    TaxiTransportationPage,
    TransportationAgenciesPage,
    TransportationEligibilityPage,
    UserLocatorPage,
    UserProfilePage,
    PlaceSearchComponent,
    ResponsiveDatepickerComponent,
    ResponsiveTimepickerComponent,
    ServiceDetailsComponent,

  ]
})

export class AppModule {}
