import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    
    {path:'homepage',loadChildren:'app/pages/homepage/homepage.module#HomepageModule'},
    {path:'user',loadChildren:'./pages/user/user.module#UserModule'},
    {path:'admin',loadChildren:'./pages/admin/admin.module#AdminModule'},
    {path:'',redirectTo:'homepage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
