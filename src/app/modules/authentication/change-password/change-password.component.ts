import { Component } from '@angular/core';
import { ModalVisibilityService } from 'src/app/shared/services/modal-visibility/modal-visibility.service';
import { PasswordService } from 'src/app/shared/services/authentication/change-password.service';
import { TokenStorageService } from 'src/app/shared/services/authentication/token-storage.service';
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

  constructor(
    private modalService: ModalVisibilityService,
    private passwordService: PasswordService,
    private tokenStorageService: TokenStorageService
  ) {
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
    this.passwordService.changePassword(
      this.tokenStorageService.getUser().id!,
      this.newPassword
    );
  }
}
