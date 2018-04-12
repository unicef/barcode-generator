import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseBarcodeListItemComponent } from './warehouse-barcode-list-item.component';

describe('WarehouseBarcodeListItemComponent', () => {
  let component: WarehouseBarcodeListItemComponent;
  let fixture: ComponentFixture<WarehouseBarcodeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseBarcodeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseBarcodeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
