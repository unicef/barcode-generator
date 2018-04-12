import { Component, OnInit, Input } from '@angular/core';
import { WarehouseBarcode} from '../warehouse-barcode'

@Component({
  selector: 'app-warehouse-barcode-list-item',
  templateUrl: './warehouse-barcode-list-item.component.html',
  styleUrls: ['./warehouse-barcode-list-item.component.scss']
})
export class WarehouseBarcodeListItemComponent implements OnInit {

  @Input('barcode') barcode: WarehouseBarcode
  
  constructor() { }

  ngOnInit() {
  }

}
