import { Barcode } from './barcode'

export class SuplierBarcode extends Barcode {

  public poNumber: number;
  public itemNumber: string ="";
  public materialNumber: string ="";
  public quantity: string ="";
  public batchNumber: string ="";
  public manufacturingDate: string;
  public expiryDate: string;

  constructor() {
    super();
  }

  // Get a string in the format 'yyyy-mm-dd'
  // and converts it into the format 'ddmmyy'
  dateToBarcodeString( date: string) : string {
    let dateComponents = date.match(/(\d+)\-(\d+)-(\d+)/);
    return dateComponents[1].substring(2,4) +
      dateComponents[2].padStart(2,'0') +
      dateComponents[3].padStart(2,'0')
  }

  //
  //
  buildPayload() : string {
    let payload = this.poNumber + "~"
      + this.itemNumber + "~"
      + this.materialNumber + "~"
      + this.quantity
    if (this.batchNumber.length > 0) {
      payload += "~"
        + this.batchNumber + "~"
        + this.dateToBarcodeString(this.manufacturingDate) + "~"
        + this.dateToBarcodeString(this.expiryDate)
    }
    return payload
  }

  //
  //
  barcodeType() : string {
    return 'suplier'
  }

}
