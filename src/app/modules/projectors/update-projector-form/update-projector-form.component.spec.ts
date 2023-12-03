import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectorFormComponent } from './update-projector-form.component';

describe('UpdateProjectorFormComponent', () => {
  let component: UpdateProjectorFormComponent;
  let fixture: ComponentFixture<UpdateProjectorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProjectorFormComponent]
    });
    fixture = TestBed.createComponent(UpdateProjectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
