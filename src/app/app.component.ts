import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyloginComponent } from './components/mylogin/mylogin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyloginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mine-proj';
}
