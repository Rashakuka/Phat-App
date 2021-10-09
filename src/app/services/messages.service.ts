import { API_PATH } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../Interfaces/IMessage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }
  getMessages() {
    return this.http.get<IMessage[]>(`${API_PATH}/Messages`).toPromise();
  }

  postMessage(message: IMessage) {
    return this.http.post<IMessage>(`${API_PATH}/Messages`, message).toPromise();
  }
}
