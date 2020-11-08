import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellQuestionComponent } from './spell-question.component';

describe('SpellQuestionComponent', () => {
  let component: SpellQuestionComponent;
  let fixture: ComponentFixture<SpellQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
