import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
interface menuElements {
  option: string;
  icon: string;
  action: () => void;
}
@Component({
  selector: 'app-avatar-menu',
  templateUrl: './avatar-menu.component.html',
  styleUrls: ['./avatar-menu.component.scss'],
})
export class AvatarMenuComponent implements OnInit {
  menuElements!: menuElements[];
  constructor(
    private router: Router,
    private authservice: AuthService
  ) {}
  ngOnInit() {
    this.menuElements = [
      {
        option: 'Edit profile',
        icon: 'pi-user-edit',
        action: this.editProfile.bind(this),
      },
      {
        option: 'Change password',
        icon: 'pi-lock',
        action: this.changePassword.bind(this),
      },
      {
        option: 'Logout',
        icon: 'pi-power-off',
        action: this.logout.bind(this),
      },
    ];
  }
  editProfile() {
    this.router.navigateByUrl('editprofile');
  }

  changePassword() {
    this.router.navigateByUrl('changepassword');
  }

  logout() {
    this.authservice.logout();
  }
}
