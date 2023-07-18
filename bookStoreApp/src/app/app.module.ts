import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AuthComponent } from './auth/auth.component';
import { PublicComponent } from './public/public.component';
import { SharedComponent } from './shared/shared.component';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    AuthComponent,
    PublicComponent,
    SharedComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
