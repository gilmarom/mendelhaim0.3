import { Research } from './research';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'researchfilter'
})

export class researchFilterPipe implements PipeTransform{
    transform( value: any, args?: any): any{
        if( !args){
            return value;
        }else{
            args = args.toLowerCase();
        }  

        return value.filter(items =>{
          return items.category.startsWith(args)==true
        })
    }
}  
