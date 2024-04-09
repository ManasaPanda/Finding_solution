import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appModifyNameUsingAge]'
})
export class ModifyNameUsingAgeDirective implements AfterViewInit{

  constructor(private elementRef:ElementRef) { }
  ngAfterViewInit(): void {
   this.applyStyle(); 
  }
  private applyStyle(){
      const age=this.elementRef.nativeElement.querySelector('td:nth-child(4)').innerText;
      if(age > 55){
        this.elementRef.nativeElement.querySelector('td:nth-child(3)').style.color='red'
        const name=this.elementRef.nativeElement.querySelector('td:nth-child(3)').innerText
        this.elementRef.nativeElement.querySelector('td:nth-child(3)').innerText=name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();  
        this.elementRef.nativeElement.querySelector('td:nth-child(2)').style.backgroundColor ="gray"
      }
      else if(age < 60 && age >= 25){
        this.elementRef.nativeElement.querySelector('td:nth-child(3)').style.color='green'
        this.elementRef.nativeElement.querySelector('td:nth-child(3)').innerText=
        this.elementRef.nativeElement.querySelector('td:nth-child(3)').innerText.toUpperCase()
        this.elementRef.nativeElement.querySelector('td:nth-child(2)').style.backgroundColor ="#90EE90"
      }  
      else{
        this.elementRef.nativeElement.querySelector('td:nth-child(2)').style.backgroundColor ="#FFD580"
      }
  }
}
