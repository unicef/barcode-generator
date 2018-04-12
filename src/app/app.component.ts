import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Barcode } from './barcode';
import { SuplierBarcode } from './suplier-barcode';
import { WarehouseBarcode } from './warehouse-barcode';
import { BarcodeListService} from './barcode-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  selectedForm = 'supliers';
  suplierBarcode = new SuplierBarcode();
  warehouseBarcode = new WarehouseBarcode();
  list : Barcode[];

  constructor(private barcodeListService: BarcodeListService) {
    this.list = barcodeListService.list;
  }

  showForm(formToShow) {
    console.log("showForm called");
    this.selectedForm = formToShow;
  }
  generateSuplierBarcode() {
    console.log('Generate Suplier Barcode');
    this.list.unshift(this.suplierBarcode);
    console.log(this.list);
    this.suplierBarcode = new SuplierBarcode()
  }
  generateWarehouseBarcode() {
    console.log('Generate Warehouse Barcode');
    this.list.unshift(this.warehouseBarcode);
    console.log(this.list);
    this.warehouseBarcode = new WarehouseBarcode()
  }
}
