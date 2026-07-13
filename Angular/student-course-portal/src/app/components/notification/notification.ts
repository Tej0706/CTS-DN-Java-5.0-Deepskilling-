import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider.
  // Every NotificationComponent gets its own NotificationService instance,
  // so the state is isolated and not shared with other components.
  providers: [NotificationService]
})
export class Notification {

  constructor(private notificationService: NotificationService) {}

  showNotification() {
    this.notificationService.showMessage('Enrollment Successful!');
  }

}