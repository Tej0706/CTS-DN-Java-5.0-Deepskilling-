import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Notification } from './components/notification/notification';
import { LoadingService } from './services/loading';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Notification, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-course-portal';
  constructor(public loadingService: LoadingService) {}
}
