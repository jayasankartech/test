import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() value: string;
  @Output() private clickEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  public clickEventAction() {
    this.clickEvent.emit(true);
  }
}
