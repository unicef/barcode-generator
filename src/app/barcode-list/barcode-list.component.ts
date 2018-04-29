import { Component, OnInit } from '@angular/core';
import { BarcodeListService} from '../barcode-list.service'
import { Barcode} from '../barcode'

@Component({
  selector: 'app-barcode-list',
  templateUrl: './barcode-list.component.html',
  styleUrls: ['./barcode-list.component.scss']
})
export class BarcodeListComponent implements OnInit {

  list: Barcode[];

  constructor(private barcodeList: BarcodeListService) {
    this.list= barcodeList.list
  }

  ngOnInit() {
  }

  delete(index) {
    this.list.splice(index, 1);
  }
}
