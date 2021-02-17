import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user', component:UserComponent},
  {path: 'about', component:AboutComponent},
  {path:'**',component:NotFoundComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
