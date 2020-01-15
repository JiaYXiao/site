import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch',
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
