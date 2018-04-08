import * as bwipjs from 'bwip-angular2';

export abstract class Barcode {

  /**
  * Generates barcode
  * Receives the barcodeType as argument. By default uses datamatri
  * https://github.com/metafloor/bwip-js#supported-barcode-types
  */
  generateBarcode(barcodeType = "datamatrix"): Node {
    console.log("generate was called");
    console.log(this.buildPayload())
    let canvas = document.createElement('canvas');
    bwipjs(canvas, {
       bcid: barcodeType,       // Barcode type
       text: this.buildPayload(),   	  // Text to encode
       scale: 2,                 // 3x scaling factor
       height: 40,               // Bar height, in millimeters
       width: 40,
       includetext: true,        // Show human-readable text
       textxalign: 'center',      // Always good to set this
     }, function (err, cvs) {
       if (err) {
         //document.getElementById('err').innerText = 'Error occured. See browser log for more information';
         console.log(err);
         return null;
       } else {
         console.log("created");
         return canvas;
       }
     });
     return canvas;
  }

  /**
  * This function should return the string that will be used to generate
  * the barcode.
  *
  * Each barcode class should implement it
  */
  abstract buildPayload(): string;

}
