import { Component, OnInit, Input } from '@angular/core';
import { useAnimation, transition, trigger, style, animate } from '@angular/animations';
import { animation1, animation2, animation3 } from '../animations';

@Component({
  selector: 'app-menu-icon',
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        useAnimation(animation1, {
          params: {
            height: 0,
            opacity: 1,
            backgroundColor: 'red',
            time: '1s'
          }
        }),
        useAnimation(animation3)
      ]),
      transition(':leave', [
               useAnimation (animation2)
              ])
    ])
  ],
  templateUrl: './menu-icon.component.html',
  styleUrls: ['../../sass/menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {

  isMenuActive = false;
  // @Input() isMenuActive : boolean;
  constructor() { }

  ngOnInit() {
    // this.isMenuActive = false;
  }

  toggleMenu() {
    
    alert (this.isMenuActive);
    this.isMenuActive = !this.isMenuActive;
  }
}
