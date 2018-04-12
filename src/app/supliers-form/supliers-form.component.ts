import { Component, OnInit, Input } from '@angular/core';
import { SuplierBarcode } from '../suplier-barcode'

@Component({
  selector: 'app-supliers-form',
  templateUrl: './supliers-form.component.html',
  styleUrls: ['./supliers-form.component.scss']
})
export class SupliersFormComponent implements OnInit {
  @Input('barcode') barcode: SuplierBarcode

  constructor() {
  }

  ngOnInit() {
  }

  generateBarcode() {
    //build payload
    //let datamatrix = this.barcode.generateBarcode('datamatrix');
    //let code128 = this.barcode.generateBarcode('code128');
    //console.log(barcodeCanvas);
    //document.getElementById(this.outputElementId).appendChild(datamatrix);
    //document.getElementById(this.outputElementId).appendChild(code128);

  }

}
