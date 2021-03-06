import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './MyComponents/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
