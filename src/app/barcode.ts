import * as bwipjs from 'bwip-angular2';

export abstract class Barcode {

  public payload: string;

  //barcode properties
  public height = 40;
  public width = 40;
  public bcid = "datamatrix";

  /**
  * Generates barcode
  * Receives the barcodeType as argument. By default uses datamatrix
  * https://github.com/metafloor/bwip-js#supported-barcode-types
  */
  generateBarcode(canvas: HTMLElement) {
    console.log("barcode.generateBarcode was called payload:"
      + this.buildPayload());
    this.payload = this.buildPayload();
    //let canvas = document.createElement('canvas');
    bwipjs(canvas, {
       bcid: this.bcid,       // Barcode type
       text: this.payload,   	  // Text to encode
       scale: 2,                 // 3x scaling factor
       height: this.height,               // Bar height, in millimeters
       width: this.width,
       includetext: true,        // Show human-readable text
       textxalign: 'center',      // Always good to set this
     }, function (err, cvs) {
       if (err) {
         console.log("Error creating Barcode!!")
         console.log(err);
         return null;
       } else {
         console.log("created");
         return canvas;
       }
     });
  }

  /**
  * This function should return the string that is used as input interface
  * the barcode.
  *
  * Each barcode class shall implement it
  */
  abstract buildPayload(): string;

  /**
   * This method shall be implemented by the child clases
   *
   * String that identifies the type of barcode (f.i. suplier, warehouse)
   */
  abstract barcodeType(): string;
}
