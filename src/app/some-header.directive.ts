import { booleanAttribute, Directive } from '@angular/core';
import { BaseHeaderDirective } from './base-header.directive';

@Directive({
  selector: '[appSomeHeader]',
  standalone: true,
  inputs: [
    {name: 'foo', alias: 'appSomeHeader'},
    {name: 'bar', alias: 'appSomeHeaderBar', transform: booleanAttribute}
  ],
})
export class SomeHeaderDirective extends BaseHeaderDirective {}
