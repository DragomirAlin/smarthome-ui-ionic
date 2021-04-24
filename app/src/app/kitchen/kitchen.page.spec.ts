import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPage } from './kitchen.page';

describe('KitchenPage', () => {
  let component: KitchenPage;
  let fixture: ComponentFixture<KitchenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
