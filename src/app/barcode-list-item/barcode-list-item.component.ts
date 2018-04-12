import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Barcode } from '../barcode';
import { WarehouseBarcode } from '../warehouse-barcode';
import { SuplierBarcode} from '../suplier-barcode';

@Component({
  selector: 'app-barcode-list-item',
  templateUrl: './barcode-list-item.component.html',
  styleUrls: ['./barcode-list-item.component.scss']
})
export class BarcodeListItemComponent implements OnInit {

  @Input('barcode') barcode: Barcode;
  @Output() delete = new EventEmitter<Barcode>();

  constructor() { }

  ngOnInit() {
  }

  deleteEvent() {
    this.delete.emit(this.barcode);
  }
}
