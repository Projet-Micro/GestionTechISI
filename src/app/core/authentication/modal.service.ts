import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible = true;

  get isVisible() {
    return this.visible;
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }
}
