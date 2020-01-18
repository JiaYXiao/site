import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TestComponentComponent } from './test-component/test-component.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'content',
    component: AppComponent,//TestComponentComponent,
  },
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
