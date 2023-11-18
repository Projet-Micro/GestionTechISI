import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDatatableComponent } from './users-datatable.component';

describe('UsersDatatableComponent', () => {
  let component: UsersDatatableComponent;
  let fixture: ComponentFixture<UsersDatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDatatableComponent]
    });
    fixture = TestBed.createComponent(UsersDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
