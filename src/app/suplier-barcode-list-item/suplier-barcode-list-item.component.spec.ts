import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierBarcodeListItemComponent } from './suplier-barcode-list-item.component';

describe('SuplierBarcodeListItemComponent', () => {
  let component: SuplierBarcodeListItemComponent;
  let fixture: ComponentFixture<SuplierBarcodeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplierBarcodeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierBarcodeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
