import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WarehouseBarcode } from '../warehouse-barcode'
@Component({
  selector: 'app-warehouse-form',
  templateUrl: './warehouse-form.component.html',
  styleUrls: ['./warehouse-form.component.scss']
})
export class WarehouseFormComponent implements OnInit {

  @Input('barcode') barcode: WarehouseBarcode
  @Output() generateBarcode = new EventEmitter<WarehouseBarcode>();

  constructor() { }

  ngOnInit() {
  }

  generateBarcodeClicked(){
    this.generateBarcode.emit(this.barcode);
  }

}
