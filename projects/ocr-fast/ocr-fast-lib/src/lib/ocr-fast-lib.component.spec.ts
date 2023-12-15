import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrFastLibComponent } from './ocr-fast-lib.component';

describe('OcrFastLibComponent', () => {
  let component: OcrFastLibComponent;
  let fixture: ComponentFixture<OcrFastLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OcrFastLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcrFastLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
