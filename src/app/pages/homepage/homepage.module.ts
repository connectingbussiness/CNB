import { NgModule } from '@angular/core';
import { HomepageRoutingModule } from './homepage-routing.module';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
