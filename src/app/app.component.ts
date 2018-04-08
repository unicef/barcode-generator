import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  selectedForm = 'supliers';

  showForm(formToShow) {
    console.log("showForm called");
    this.selectedForm = formToShow;
  }
}
