import { Component, EventEmitter, Output } from '@angular/core';
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
      FirstName: '',
      LastName: '',
      NIC: 0,
      email: '',
      PSW: '',
      id: 0,
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
