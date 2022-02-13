import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemlistComponent } from './itemlist/itemlist.component';

import { AdditemComponent } from './additem/additem.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { AngularMaterialModule } from './Shared/angular-material/angular-material.module';
@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    AdditemComponent,
    ItemdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
