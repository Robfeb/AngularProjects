import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharOrderQuestionComponent } from './char-order-question.component';

describe('CharOrderQuestionComponent', () => {
  let component: CharOrderQuestionComponent;
  let fixture: ComponentFixture<CharOrderQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharOrderQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharOrderQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
