import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorgePage } from './storge.page';

describe('StorgePage', () => {
  let component: StorgePage;
  let fixture: ComponentFixture<StorgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
