/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente-1Component } from './componente-1.component';

describe('Componente-1Component', () => {
  let component: Componente-1Component;
  let fixture: ComponentFixture<Componente-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
