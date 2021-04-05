import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionPopupComponent } from './connexion-popup.component';

describe('ConnexionPopupComponent', () => {
  let component: ConnexionPopupComponent;
  let fixture: ComponentFixture<ConnexionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnexionPopupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
