import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from "@angular/forms";

import { HomePageComponent } from './home-page/home-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { Presentation1PageComponent } from './presentation1-page/presentation1-page.component';
import { Presentation2PageComponent } from './presentation2-page/presentation2-page.component';
import { Presentation3PageComponent } from './presentation3-page/presentation3-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { CommandesPageComponent } from './commandes-page/commandes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InscriptionPageComponent,
    AccueilPageComponent,
    Presentation1PageComponent,
    Presentation2PageComponent,
    Presentation3PageComponent,
    CategoriesPageComponent,
    ProfilPageComponent,
    CommandesPageComponent
  ],

  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
