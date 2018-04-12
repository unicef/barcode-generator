import { Barcode } from './barcode'

export class WarehouseBarcode extends Barcode {
  public deliveryNumber: string = "";
  public itemNumber: string = "";

  constructor() {
    super();
  }

  buildPayload() : string {
    return this.deliveryNumber + this.itemNumber;
  }

  barcodeType() : string {
    return 'warehouse'
  }
}
