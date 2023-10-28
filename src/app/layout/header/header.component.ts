import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/authentication/modal.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Projecteur',
        icon: 'pi pi-video',
        items: [
          {
            label: 'Créer',
            icon: 'pi pi-fw pi-plus-circle',
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-minus-circle',
          },
          {
            label: 'Afficher liste',
            icon: 'pi pi-fw pi-bars',
          },
        ],
      },
      {
        label: 'Utilisateur',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Créer',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Supprimer',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Chercher',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'Afficher liste',
              },
            ],
          },
        ],
      },
    ];
  }
  get visible() {
    return this.modalService.isVisible;
  }
  showDialog() {
    this.modalService.showDialog();
  }
  constructor(private modalService: ModalService) {}
}
