import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { User1Component } from 'app/pages/user/user1/user1.component';
const routes: Routes = [
  {path:'',component:UserComponent,children:[
    {path:'',component:User1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
