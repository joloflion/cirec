import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormationsComponent } from './components/formations/formations.component';
import { FormationDetailsComponent } from './pages/formation-details/formation-details.component';
import { FormationFormComponent } from './components/formation-form/formation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    HomePageComponent,
    ContactPageComponent,
    ServicePageComponent,
    AboutPageComponent,
    CarouselComponent,
    FormationsComponent,
    FormationDetailsComponent,
    FormationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
