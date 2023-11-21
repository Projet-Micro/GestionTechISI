import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarMenuComponent } from './avatar-menu.component';

describe('AvatarMenuComponent', () => {
  let component: AvatarMenuComponent;
  let fixture: ComponentFixture<AvatarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarMenuComponent]
    });
    fixture = TestBed.createComponent(AvatarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
