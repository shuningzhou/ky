import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyFormItemControlComponent } from './ky-form-item-control.component';

describe('KyFormItemControlComponent', () => {
  let component: KyFormItemControlComponent;
  let fixture: ComponentFixture<KyFormItemControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyFormItemControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyFormItemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
