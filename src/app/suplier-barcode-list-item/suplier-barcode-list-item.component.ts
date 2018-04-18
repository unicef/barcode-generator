import { Component, OnInit, Input } from '@angular/core';
import { SuplierBarcode} from '../suplier-barcode';

@Component({
  selector: 'app-suplier-barcode-list-item',
  templateUrl: './suplier-barcode-list-item.component.html',
  styleUrls: ['./suplier-barcode-list-item.component.scss']
})
export class SuplierBarcodeListItemComponent implements OnInit {

  @Input('barcode') barcode: SuplierBarcode

  constructor() { }

  ngOnInit() {
  }

}
