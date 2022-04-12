import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path:'tasks',component:TaskComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:NotFoundComponent},

  {path:'',redirectTo:"/tasks",pathMatch:"full"}
];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
   declarations: []
   })
   export class AppRoutingModule { }


