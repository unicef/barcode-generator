import { Injectable } from '@angular/core';
import { Barcode } from './barcode'

@Injectable()
export class BarcodeListService {

  public list: Array<Barcode> = [];

  constructor() { }

}
