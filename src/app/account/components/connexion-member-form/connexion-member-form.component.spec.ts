import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionMemberFormComponent } from './connexion-member-form.component';

describe('ConnexionMemberFormComponent', () => {
  let component: ConnexionMemberFormComponent;
  let fixture: ComponentFixture<ConnexionMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionMemberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
