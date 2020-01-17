import { Component, OnInit } from '@angular/core';
import { useAnimation, transition, trigger, style, animate } from '@angular/animations';
import { animation1, animation2 } from '../animations';
// import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-launch',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        useAnimation(animation1, {
          params: {
            height: 0,
            opacity: 1,
            backgroundColor: 'red',
            time: '5s'
          }
        })
      ]),
      transition(':leave', [
               useAnimation (animation2)
              ])
    ])
  ],
  // animations: [
  //   trigger(
  //     'enterAnimation', [
  //       transition(':enter', [
  //         style({transform: 'translateX(100%)', opacity: 0}),
  //         animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
  //       ]),
  //       transition(':leave', [
  //         style({transform: 'translateX(0)', opacity: 1}),
  //         animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
  //       ])
  //     ]
  //   )
  // ],
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
