import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfidPage } from './rfid.page';

describe('RfidPage', () => {
  let component: RfidPage;
  let fixture: ComponentFixture<RfidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfidPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
