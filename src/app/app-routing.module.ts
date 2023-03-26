import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormationDetailsComponent } from './pages/formation-details/formation-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'services',
    component: ServicePageComponent
  },
  {
    path: 'qui-sommes-nous',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'formation/:id',
    component: FormationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: "enabled" }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
