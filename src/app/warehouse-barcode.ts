import { Barcode } from './barcode'

export class WarehouseBarcode extends Barcode {
  public deliveryNumber: number;
  public itemNumber: string;

  constructor() {
    super();
  }
  
  buildPayload() : string {
    return "ohhh yeah Warehouse Barcode!";
  }
}
