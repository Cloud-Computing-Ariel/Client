import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  constructor(private socket: Socket) {}

  getMessage() {
    return this.socket.fromEvent('onDashboardUpdate').pipe(
      map((data) => {
        return data;
      })
    );
  }

  sendMessage(msg: any) {
    this.socket.emit('onDashboardUpdate', msg);
  }
}
