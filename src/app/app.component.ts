import { Component } from '@angular/core';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //make public to bind to html
  constructor(public auth: AuthService){

  }
  title = 'WaterLupus';
}
