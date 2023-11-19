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
  rememberUser = false;
  @Output() userUpdateEvent = new EventEmitter<UserInfo>();
  @Output() rememberUserEvent = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) {
    this.user = {
      id: 0,
      FirstName: '',
      LastName: '',
      NIC: 0,
      email: '',
      PSW: '',
    };
  }

  UpdateUser() {
    this.userUpdateEvent.emit(this.user);
    this.rememberUserEvent.emit(this.rememberUser);
  }

  get visible() {
    return this.modalService.isVisible;
  }
  set visible(val: boolean) {
    this.modalService.hideDialog();
  }
}
