import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fpf = 0;
  help = false;
  test() {
    this.help = !this.help;
  }
}
