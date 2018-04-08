import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgClass } from '@angular/common';

import { AppComponent } from './app.component';
import { SupliersFormComponent } from './supliers-form/supliers-form.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SupliersFormComponent,
    WarehouseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
