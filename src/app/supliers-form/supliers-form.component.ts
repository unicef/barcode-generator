import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuplierBarcode } from '../suplier-barcode'

@Component({
  selector: 'app-supliers-form',
  templateUrl: './supliers-form.component.html',
  styleUrls: ['./supliers-form.component.scss']
})
export class SupliersFormComponent implements OnInit {

  @Input('barcode') barcode: SuplierBarcode
  @Output() generateBarcode = new EventEmitter<SuplierBarcode>();

  constructor() {
  }

  ngOnInit() {
  }

  generateBarcodeClicked(){
    this.generateBarcode.emit(this.barcode);
  }
}
