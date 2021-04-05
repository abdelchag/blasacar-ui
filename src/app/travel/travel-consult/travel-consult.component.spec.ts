import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelConsultComponent } from './travel-consult.component';

describe('TravelConsultComponent', () => {
  let component: TravelConsultComponent;
  let fixture: ComponentFixture<TravelConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelConsultComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
