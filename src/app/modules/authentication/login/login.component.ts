import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from 'src/app/core/authentication/modal.service';
import { UserInfo } from 'src/app/shared/models/user-info';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: UserInfo;
  rememberMe: boolean;
  @Output() userUpdateEvent = new EventEmitter<UserInfo>();

  constructor(private modalService: ModalService) {
    this.user = {
      id: 0,
      FirstName: '',
      LastName: '',
      NIC: 0,
      email: '',
      PSW: '',
    };
    this.rememberMe = false;
  }

  UpdateUser() {
    this.userUpdateEvent.emit(this.user);
  }

  get visible() {
    return this.modalService.isVisible;
  }
  set visible(val: boolean) {
    this.modalService.hideDialog();
  }
}
