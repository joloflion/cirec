import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FormationDetailsComponent } from './pages/formation-details/formation-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SessionPageComponent } from './pages/session-page/session-page.component';

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
  },
  {
    path: "catalogue",
    component: CatalogueComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: 'sessions/:id',
    component: SessionPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: "enabled" }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
