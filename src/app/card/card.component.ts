import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public header = 'this is header';

  @Input()
  public footer = 'this is footer';

  constructor() { }

  ngOnInit() {
  }

}
