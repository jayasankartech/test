import { Component } from '@angular/core';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  evennumbers = [2, 4, 6];
  oddnumbers = [1, 3, 5];
  odd = false;

  public takeshot() {
    let div = document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas.default(div).then(function (canvas) {
      document.getElementById('output').appendChild(canvas);
    });
  }
}
