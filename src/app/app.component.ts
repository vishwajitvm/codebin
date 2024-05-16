import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { firebaseConfig } from '../../firebaseconfig';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codebin';
  constructor () {
    // const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    initializeApp(firebaseConfig);
  }
}
