import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  constructor(private socket: Socket) {}

  getHeaderCardsData() {
    return this.socket.fromEvent('onHeaderCardsUpdate').pipe(
      map((element) => {
        return element;
      })
    );
  }

  getBodyCardsData() {
    return this.socket.fromEvent('onBodyCardsUpdate').pipe(
      map((element) => {
        return element;
      })
    );
  }

  sendMessage(msg: any) {
    this.socket.emit('onDashboardUpdate', msg);
  }
}
