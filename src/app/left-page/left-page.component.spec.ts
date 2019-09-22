import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPageComponent } from './left-page.component';

describe('LeftPageComponent', () => {
  let component: LeftPageComponent;
  let fixture: ComponentFixture<LeftPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
