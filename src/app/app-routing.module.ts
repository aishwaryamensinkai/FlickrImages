import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
  { path: 'firstpage', component: FirstPageComponent },
  { path: 'secondpage', component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
