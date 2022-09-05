import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutBusinessComponent } from './about.business/about.business.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES: Routes = [
  { path: '',component: HomeComponent, },
  { path: 'produtos', component: ProductsComponent, },
  { path: 'sobre', component: AboutBusinessComponent, },
  { path: 'cadastrar', component: RegisterComponent, },
  { path: 'contato', component: ContactComponent, },
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(APP_ROUTES);
