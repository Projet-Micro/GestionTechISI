import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectorFormComponent } from './add-projector-form.component';

describe('AddProjectorFormComponent', () => {
  let component: AddProjectorFormComponent;
  let fixture: ComponentFixture<AddProjectorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProjectorFormComponent]
    });
    fixture = TestBed.createComponent(AddProjectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
