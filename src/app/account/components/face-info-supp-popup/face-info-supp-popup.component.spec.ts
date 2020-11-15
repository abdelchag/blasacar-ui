import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceInfoSuppPopupComponent } from './face-info-supp-popup.component';

describe('FaceInfoSuppPopupComponent', () => {
  let component: FaceInfoSuppPopupComponent;
  let fixture: ComponentFixture<FaceInfoSuppPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceInfoSuppPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceInfoSuppPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
