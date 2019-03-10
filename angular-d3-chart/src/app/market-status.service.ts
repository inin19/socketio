import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketPrice } from './market-price';
import * as socketio from 'socket.io-client';
import { Subject, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MarketStatusService {

  private baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getInitialMarketStatus() {
    return this.httpClient.get<MarketPrice[]>(`${this.baseUrl}/api/market`);
  }

  getUpdates() {
    const socket = socketio(this.baseUrl);
    const marketSub = new Subject<MarketPrice>();
    const marketSubObservable = from(marketSub);

    socket.on('market', (marketStatus: MarketPrice) => {
      marketSub.next(marketStatus);
    });

    return marketSubObservable;
  }


}
