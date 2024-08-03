import { booleanAttribute, Directive, Input } from '@angular/core';
import { BaseHeaderDirective } from './base-header.directive';

@Directive({
  selector: '[appSomeHeader]',
  standalone: true,
  inputs: [
    {name: 'foo', alias: 'appSomeHeader'},
  ],
})
export class SomeHeaderDirective extends BaseHeaderDirective {
  @Input({alias: 'appSomeHeaderBar', transform: booleanAttribute}) override bar: boolean = false;
}
