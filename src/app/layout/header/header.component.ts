import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/authentication/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private modalService: ModalService) {}
  get visible() {
    return this.modalService.isVisible;
  }
  showDialog() {
    this.modalService.showDialog();
  }
}
