import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthComponent } from './unauth.component';

describe('UnauthComponent', () => {
  let component: UnauthComponent;
  let fixture: ComponentFixture<UnauthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthComponent]
    });
    fixture = TestBed.createComponent(UnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
