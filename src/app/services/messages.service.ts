import { API_PATH } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../Interfaces/IMessage';
import { IMessagePost } from '../Interfaces/IMessagePost';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }
  getMessages() {
    return this.http.get<IMessage[]>(`${API_PATH}/Message?skip=1&take=10`).toPromise();;
  }

  postMessage(message: IMessagePost) {
    return this.http.post<string>(`${API_PATH}/Message`, message).toPromise();
  }
}
