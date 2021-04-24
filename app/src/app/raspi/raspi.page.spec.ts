import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspiPage } from './raspi.page';

describe('RaspiPage', () => {
  let component: RaspiPage;
  let fixture: ComponentFixture<RaspiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
