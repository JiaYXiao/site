import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuIconComponent,
    WorkExpComponent,
    AboutMeComponent,
    LaunchpageComponent,
    TestComponentComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
