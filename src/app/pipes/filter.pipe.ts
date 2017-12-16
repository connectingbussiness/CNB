import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
    name: 'filterpipe',
    pure:true
})
export class Filter implements PipeTransform {

    transform(values: any, name:string) {
        if(!isNullOrUndefined(name)&&name!='')
        {
           return values.filter((value)=>
        
                 value.indexOf(name)!=-1
            )
        }
        return values;
    }

}