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
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './core/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { DomainesComponent } from './components/domaines/domaines.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminComponent } from './pages/admin/admin.component';
import { SessionFormComponent } from './components/session-form/session-form.component';
import { SessionDialogComponent } from './components/session-dialog/session-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { SessionEnCourtComponent } from './components/session-en-court/session-en-court.component';
import { SessionPageComponent } from './pages/session-page/session-page.component';





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
    FormationFormComponent,
    AboutUsComponent,
    TeamComponent,
    ContactComponent,
    TestimonialsComponent,
    VideoPlayerComponent,
    GalleryComponent,
    CatalogueComponent,
    DomainesComponent,
    AdminComponent,
    SessionFormComponent,
    SessionDialogComponent,
    TextEditorComponent,
    SessionEnCourtComponent,
    SessionPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CarouselModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
