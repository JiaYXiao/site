import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-launch',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './launch.component.html',
  styleUrls: ['../../sass/launch.component.scss']
})
export class LaunchComponent implements OnInit {

  isMenuActive = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
