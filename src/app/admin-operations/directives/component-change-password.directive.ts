import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentChangePassword]'
})
export class ComponentChangePasswordDirective {

  constructor(public viewcontainerref:ViewContainerRef) { }

}
