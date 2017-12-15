
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { GlobalService } from 'app/services/global.service';
import { User1Component } from 'app/pages/user/user1/user1.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [UserComponent, User1Component],
  providers:[GlobalService]
})
export class UserModule { }
