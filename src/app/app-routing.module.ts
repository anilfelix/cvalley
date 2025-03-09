import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, data: { title: 'Home - My App' } }, // Default route
  // { path: 'home', component: AppComponent, data: { title: 'About Us - My App' } },
  // { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
