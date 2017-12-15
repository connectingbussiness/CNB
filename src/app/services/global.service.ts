import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
@Injectable()
export class GlobalService {
    private names=['prema','manjari','ravi','ramu','razak','prem'];
    friends:BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(this.names);
    
    constructor() { }
  
    public addFriends(name)
    {
        let frds:any=this.friends.getValue();
        if(frds.filter((value)=>value==name).length==0)
        {
            frds.push(name);
            this.friends.next(frds);
        }
    }    
}