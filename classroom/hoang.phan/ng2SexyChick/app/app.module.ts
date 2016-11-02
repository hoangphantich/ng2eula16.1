import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './core/home.component';
import { SexiesComponent } from './sexy/sexies.component';

import { FilterSexyPipe } from './helpers/filtersexy.pipe'

/**module bootstrap */
@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'sexies', component: SexiesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule
   ],
  declarations: [ AppComponent, HomeComponent, SexiesComponent, FilterSexyPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
