import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenStorageService } from 'src/app/shared/services/authentication/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  username: string = '';
  menuVisible: boolean = false;
  constructor(private tokenStorageService: TokenStorageService) {
    this.username = this.tokenStorageService.getUser().FirstName;
  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        url: '/',
      },
      {
        label: 'Projectors',
        icon: 'pi pi-video',
        url: '/projectors',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        url: '/users',
      },
    ];
  }
}
