import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubtaskComponent } from './create-subtask.component';

describe('CreateSubtaskComponent', () => {
  let component: CreateSubtaskComponent;
  let fixture: ComponentFixture<CreateSubtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSubtaskComponent]
    });
    fixture = TestBed.createComponent(CreateSubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
