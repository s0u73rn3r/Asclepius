import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPetsComponent } from './pets/all-pets-table/all-pets.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserTableComponent } from './pets/user-table/user-table.component';
import { AngularFireModule } from '@angular/fire';
import { environment as env } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { ConformationComponent } from './forms/conformation/conformation.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    AboutComponent,
    HomeComponent,
    FormsComponent,
    NavBarComponent,
    UserTableComponent,
    ConformationComponent,
    InformationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(env.firebase),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
