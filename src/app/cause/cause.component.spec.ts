/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CauseComponent } from './cause.component';

describe('CauseComponent', () => {
  let component: CauseComponent;
  let fixture: ComponentFixture<CauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
