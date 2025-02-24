import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { LoginComponent } from "./page/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school-app';
}
