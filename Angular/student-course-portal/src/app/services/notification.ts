import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {}

  showMessage(message: string) {
    alert(message);
  }

}