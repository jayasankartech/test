import { Component } from '@angular/core';
import * as htmlToImage from 'html-to-image';
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

  public takeshothtml2canvas() {
    let div = document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas.default(div).then(function (canvas) {
      document.getElementById('output').appendChild(canvas);
      var img = canvas.toDataURL('image/jpeg');
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = img;
      link.click();
    });
  }

  public takeshothtml2image() {
    let div = document.getElementById('photo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    htmlToImage.toCanvas(div).then(function (canvas) {
      document.getElementById('output').appendChild(canvas);
    });

    htmlToImage.toJpeg(div, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
  }
}
