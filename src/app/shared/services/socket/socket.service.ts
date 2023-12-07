import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor() {}

  private socket = io('https://profjector-back.onrender.com',);

  sendMessage(message: string) {
    this.socket.emit('new-message', message);
  }

  //refresh$ = this.

  getMessages() {
    return new Observable<{ summary:string; message: string }>(observer => {
      this.socket.on('rent', data => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }
}
