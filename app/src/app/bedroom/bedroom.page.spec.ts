import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomPage } from './bedroom.page';

describe('BedroomPage', () => {
  let component: BedroomPage;
  let fixture: ComponentFixture<BedroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedroomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
