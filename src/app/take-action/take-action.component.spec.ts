/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TakeActionComponent } from './take-action.component';

describe('TakeActionComponent', () => {
  let component: TakeActionComponent;
  let fixture: ComponentFixture<TakeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
