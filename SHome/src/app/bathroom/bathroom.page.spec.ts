import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomPage } from './bathroom.page';

describe('BathroomPage', () => {
  let component: BathroomPage;
  let fixture: ComponentFixture<BathroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
