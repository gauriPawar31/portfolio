import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Chuchi';
  time = new Date()
  setNameValue(newName) {
    console.log(newName)
    this.name = newName
  }

}
