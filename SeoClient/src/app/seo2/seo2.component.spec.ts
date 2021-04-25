import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seo2Component } from './seo2.component';

describe('Seo2Component', () => {
  let component: Seo2Component;
  let fixture: ComponentFixture<Seo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
