import {Component} from '@angular/core';
import {UserInfo} from "../../../shared/models/user-info";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent {
  user: UserInfo = {
    id: 0,
    FirstName: '0',
    LastName: '0',
    email: '0',
    NIC: 0,
  };

  isAdmin: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  addUser() {
    this.user.status = this.isAdmin;
    this.ref.close(this.user);
  }

  cancel() {
    this.ref.close();
  }
}
