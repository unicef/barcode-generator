import { Barcode } from './barcode'

export class SuplierBarcode extends Barcode {

  public poNumber: number;
  public itemNumber: string ="";
  public materialNumber: string ="";
  public quantity: string ="";
  public batchNumber: string ="";
  public manufacturingDate: string ="";
  public expiryDate: string ="";

  constructor() {
    super();
  }

  //
  buildPayload() : string {
    return (this.poNumber + "~"
      + this.itemNumber + "~"
      + this.materialNumber + "~"
      + this.quantity + "~"
      + this.batchNumber + "~"
      + this.manufacturingDate + "~"
      + this.expiryDate);
  }

  barcodeType() : string {
    return 'suplier'
  }

}
