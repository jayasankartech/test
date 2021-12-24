import { Component } from '@angular/core';

@Component({
  selector: 'fbutton',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {}
