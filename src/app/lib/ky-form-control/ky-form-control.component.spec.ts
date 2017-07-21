import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyFormControlComponent } from './ky-form-control.component';

describe('KyFormControlComponent', () => {
  let component: KyFormControlComponent;
  let fixture: ComponentFixture<KyFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
