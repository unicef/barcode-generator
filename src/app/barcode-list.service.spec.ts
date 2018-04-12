import { TestBed, inject } from '@angular/core/testing';

import { BarcodeListService } from './barcode-list.service';

describe('BarcodeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeListService]
    });
  });

  it('should be created', inject([BarcodeListService], (service: BarcodeListService) => {
    expect(service).toBeTruthy();
  }));
});
