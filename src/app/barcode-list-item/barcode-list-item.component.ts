import { Component, EventEmitter, Input, OnInit, Output, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Barcode } from '../barcode';
import { WarehouseBarcode } from '../warehouse-barcode';
import { SuplierBarcode} from '../suplier-barcode';

@Component({
  selector: 'app-barcode-list-item',
  templateUrl: './barcode-list-item.component.html',
  styleUrls: ['./barcode-list-item.component.scss']
})
export class BarcodeListItemComponent implements OnInit {

  @Input('barcode') barcode: Barcode;
  @Output() delete = new EventEmitter<Barcode>();
  @ViewChild('canvasDiv') canvasDiv: ElementRef;

  private editMode: boolean = false;
  private rendererCanvas: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit payload="  + this.barcode.payload);
    //document.getElementById(this.barcode.payload).appendChild(this.barcode.canvas);
    this.rendererCanvas = this.renderer.createElement("canvas");
    this.renderer.appendChild(this.canvasDiv.nativeElement, this.rendererCanvas);
    this.barcode.generateBarcode(this.rendererCanvas);
  }
  toggleEdit() {
    this.editMode = !this.editMode;
  }
  generateBarcode(barcodeType) {
    console.log("** generateBarcode: barcodeType=" + barcodeType);
    this.barcode.generateBarcode(this.rendererCanvas);
    this.toggleEdit(); //
  }
  deleteEvent() {
    this.delete.emit(this.barcode);
  }
}
