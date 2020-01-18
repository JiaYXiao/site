import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../sass/menu.component.scss']
})
export class MenuComponent implements OnInit {

  ids: Array<String> = ['one', 'two', 'three', 'four']
  constructor() { }

  ngOnInit() {
  }

}
