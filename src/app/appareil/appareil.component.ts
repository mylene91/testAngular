import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // appareilName = 'Machine à café';
  // décorateur @Input à importer aussi
  @Input() appareilName: string;
  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
