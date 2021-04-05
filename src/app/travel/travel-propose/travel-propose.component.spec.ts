import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelProposeComponent } from './travel-propose.component';

describe('TravelProposeComponent', () => {
  let component: TravelProposeComponent;
  let fixture: ComponentFixture<TravelProposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelProposeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
