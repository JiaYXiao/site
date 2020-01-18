import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MenuIconComponent } from '../menu-icon/menu-icon.component'
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})



export class CoreComponent implements OnInit {
  
  message:boolean;
  // @ViewChild(MenuIconComponent, {static: false}) child;

  // ngAfterViewInit() {
  //   this.message = this.child.isMenuActive;
  // }
  //isMenuActive = false;
  constructor() { }

  ngOnInit() {
    
  }
//   ngOnChanges(changes: {
//     [key: string]: SimpleChange;
// }) {
//     this.message = this.child.isMenuActive;
//     console.log('aaaaaaaaaaaaAAAAAAAAAAAAAAAAAAA')
//   }

}
