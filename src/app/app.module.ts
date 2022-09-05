import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MenuNavComponent } from './menu.nav/menu.nav.component';
import { ContactComponent } from './contact/contact.component';
import { AboutBusinessComponent } from './about.business/about.business.component';
import { ProductsComponent } from './products/products.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    AboutBusinessComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
