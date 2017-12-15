import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/services/global.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
 public receiver:any;
  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.globalService.friends.subscribe((result)=>{
      this.receiver=result;
    });
  }

}
