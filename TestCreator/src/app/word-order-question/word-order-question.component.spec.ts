import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordOrderQuestionComponent } from './word-order-question.component';

describe('WordOrderQuestionComponent', () => {
  let component: WordOrderQuestionComponent;
  let fixture: ComponentFixture<WordOrderQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordOrderQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordOrderQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
