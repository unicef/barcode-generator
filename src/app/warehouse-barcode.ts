import { Barcode } from './barcode'

export class WarehouseBarcode extends Barcode {
  public deliveryNumber: string = "";
  public handlingUnit: string = "";


  public height = 20;
  public width = 60;
  public bcid = "code128";

  constructor() {
    super();
  }

  buildPayload() : string {
    return this.deliveryNumber + this.handlingUnit;
  }

  barcodeType() : string {
    return 'warehouse'
  }
}
