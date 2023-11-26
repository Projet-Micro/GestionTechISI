import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalVisibilityService {
  private modalVisibleSubject = new BehaviorSubject<boolean>(false);

  getmodalVisibility(): Observable<boolean> {
    return this.modalVisibleSubject.asObservable();
  }

  setmodalVisibility(value: boolean): void {
    this.modalVisibleSubject.next(value);
  }
}
