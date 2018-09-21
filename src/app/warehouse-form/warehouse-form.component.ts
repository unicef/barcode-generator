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

  constructor() {
  }

  ngOnInit() {
  }

  addPadToDeliveryNumber() {

    this.barcode.deliveryNumber = this.pad0(10, this.barcode.deliveryNumber)
  }

  addPadToHandlingUnit() {
    this.barcode.handlingUnit = this.pad0(4, this.barcode.handlingUnit)
  }

  pad0(expectedLength, inputValue) {
    let length = inputValue.length
    if (length == expectedLength) {
      return inputValue;
    }
    if (isNaN(inputValue)) {
      console.log('input was not a number');
      return inputValue;
    }
    return  inputValue.padStart(expectedLength, '0');
  }

  generateBarcodeClicked() {
      this.generateBarcode.emit(this.barcode);
  }

}
