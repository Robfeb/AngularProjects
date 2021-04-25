import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seo3Component } from './seo3.component';

describe('Seo3Component', () => {
  let component: Seo3Component;
  let fixture: ComponentFixture<Seo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
