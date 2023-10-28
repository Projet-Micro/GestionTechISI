import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/authentication/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  password: string;
  constructor(private modalService: ModalService) {
    this.password = '';
  }

  get visible() {
    return this.modalService.isVisible;
  }
  set visible(val: boolean) {
    this.modalService.hideDialog();
  }
}
