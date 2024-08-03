import { booleanAttribute, Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBaseHeader]',
  inputs: [{name: 'foo', alias: 'appBaseHeader'}],
  standalone: true
})
export class BaseHeaderDirective {
  foo: string = '';
  @Input({alias: 'appBaseHeaderBar', transform: booleanAttribute})
  bar: boolean = false;
}
