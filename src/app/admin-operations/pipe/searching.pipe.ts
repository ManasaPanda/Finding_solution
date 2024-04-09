import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../../model/user.model';

@Pipe({
  name: 'sorting'
})
export class SearchingPipe implements PipeTransform {

  transform(value: any, type:string): any {
   
    if (!Array.isArray(value) || value.length === 0) {  
      return value; 
    }
  
    value.sort((a: any, b: any) => {
     
      if (!('age' in a) || !('age' in b)) {
        
        return 0; 
      }
  
      if (type === 'asc') {
        return a.age - b.age;
      } else if (type === 'Desc') {
        return b.age - a.age;
      } else {
       
        return 0; 
      }
    });
  
    return value;
 }

}
