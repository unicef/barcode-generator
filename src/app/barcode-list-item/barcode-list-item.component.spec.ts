import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeListItemComponent } from './barcode-list-item.component';

describe('BarcodeListItemComponent', () => {
  let component: BarcodeListItemComponent;
  let fixture: ComponentFixture<BarcodeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcodeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
