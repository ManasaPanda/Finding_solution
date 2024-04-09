import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../../model/user.model';

@Pipe({
  name: 'searchingByid'
})
export class SearchingByNamePipe implements PipeTransform {
  
  transform(list: UserModel[], searchCriteria: string){
    //console.log(list);
    
    
    if (!list || !searchCriteria) {
      return list;
    } 
    else{
     return list.filter((record)=>{
          return record.Name.toString().toLocaleLowerCase().includes(searchCriteria)
     })
     }   
    }
  } 


