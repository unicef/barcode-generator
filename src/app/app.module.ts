import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgClass } from '@angular/common';

import { AppComponent } from './app.component';
import { SupliersFormComponent } from './supliers-form/supliers-form.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { BarcodeListService} from './barcode-list.service';
import { BarcodeListComponent } from './barcode-list/barcode-list.component';
import { WarehouseBarcodeListItemComponent } from './warehouse-barcode-list-item/warehouse-barcode-list-item.component';
import { SuplierBarcodeListItemComponent } from './suplier-barcode-list-item/suplier-barcode-list-item.component';
import { BarcodeListItemComponent } from './barcode-list-item/barcode-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    SupliersFormComponent,
    WarehouseFormComponent,
    BarcodeListComponent,
    WarehouseBarcodeListItemComponent,
    SuplierBarcodeListItemComponent,
    BarcodeListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BarcodeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
