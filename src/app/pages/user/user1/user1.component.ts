import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/services/global.service';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  public name:any;
  public receiver:any;
  public filter:any;
  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.globalService.friends.subscribe((result)=>{
      this.receiver=result;
    });
  }

  addFriend()
  {
    if(!isNullOrUndefined(this.name)&&this.name!='')
    {
      this.globalService.addFriends(this.name);
    }
  }

}




