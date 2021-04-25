import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seo1Component } from './seo1.component';

describe('Seo1Component', () => {
  let component: Seo1Component;
  let fixture: ComponentFixture<Seo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
