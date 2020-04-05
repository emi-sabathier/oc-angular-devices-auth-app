import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import { ForOhFourComponent } from './for-oh-four/for-oh-four.component';

const appRoutes: Routes = [
  {
    path: 'appareils', component: AppareilViewComponent
  },
  {
    path: 'appareils/:id', component: SingleAppareilComponent
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: '', component: AppareilViewComponent
  },
  {
    path: 'not-found', component: ForOhFourComponent
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    ForOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
