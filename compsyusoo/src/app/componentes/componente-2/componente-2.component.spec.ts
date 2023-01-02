/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente-2Component } from './componente-2.component';

describe('Componente-2Component', () => {
  let component: Componente-2Component;
  let fixture: ComponentFixture<Componente-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
