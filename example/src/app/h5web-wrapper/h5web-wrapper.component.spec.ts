import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H5webWrapperComponent } from './h5web-wrapper.component';

describe('H5webWrapperComponent', () => {
  let component: H5webWrapperComponent;
  let fixture: ComponentFixture<H5webWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H5webWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H5webWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
