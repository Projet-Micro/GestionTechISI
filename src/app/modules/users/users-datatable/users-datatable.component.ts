import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { UserInfo } from 'src/app/shared/models/user-info';
@Component({
  selector: 'app-users-datatable',
  templateUrl: './users-datatable.component.html',
  styleUrls: ['./users-datatable.component.scss'],
})
export class UsersDatatableComponent implements OnInit {
  users: UserInfo[] = [];
  DisplayNotification = false;
  constructor(private UsersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.UsersService.getAllUsers(this.DisplayNotification).subscribe(
      users => (this.users = users)
    );
  }
}
