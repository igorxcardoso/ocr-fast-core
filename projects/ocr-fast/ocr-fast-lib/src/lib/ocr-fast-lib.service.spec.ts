import { TestBed } from '@angular/core/testing';

import { OcrFastLibService } from './ocr-fast-lib.service';

describe('OcrFastLibService', () => {
  let service: OcrFastLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrFastLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
