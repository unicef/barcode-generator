import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupliersFormComponent } from './supliers-form.component';

describe('SupliersFormComponent', () => {
  let component: SupliersFormComponent;
  let fixture: ComponentFixture<SupliersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupliersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupliersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
