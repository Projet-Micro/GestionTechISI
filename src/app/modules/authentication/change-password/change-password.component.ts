import { Component } from '@angular/core';
import { ModalVisibilityService } from 'src/app/shared/services/modal-visibility/modal-visibility.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  isVisible: boolean = false;
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private modalService: ModalVisibilityService) {
    this.modalService.getmodalVisibility().subscribe(value => {
      this.isVisible = value;
    });
  }

  changeVisibility() {
    this.modalService.setmodalVisibility(false);
  }

  areFieldsFilled(): boolean {
    return (
      !!this.currentPassword && !!this.newPassword && !!this.confirmPassword
    );
  }
  changePassword() {
    console.log('to implement');
  }
}
