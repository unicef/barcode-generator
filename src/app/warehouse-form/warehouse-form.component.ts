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
    console.log("New Barcode");
    this.generateBarcode.emit(this.barcode);
  }
  //generateBarcode() {
    //build payload
//    let datamatrix = this.barcode.generateBarcode('datamatrix');
//    let code128 = this.barcode.generateBarcode('code128');
    //console.log(barcodeCanvas);
//    document.getElementById(this.outputElementId).appendChild(datamatrix);
//    document.getElementById(this.outputElementId).appendChild(code128);

  //}


}
