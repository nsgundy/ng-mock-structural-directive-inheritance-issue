import { Component } from '@angular/core';
import { SomeHeaderDirective } from './some-header.directive';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ngMocks } from 'ng-mocks';

describe('SomeHeaderDirective', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();
  }));

  it('should have correct foo and bar value', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const debugElement = fixture.debugElement.queryAllNodes(By.directive(SomeHeaderDirective))[0];
    const directive = debugElement.injector.get(SomeHeaderDirective);
    expect(directive.foo).toBe('foo');
    expect(directive.bar).toBe(true);
  });

  afterEach(() => {
    if (false) {
      // Just here to show that calling `ngMocks` anywhere will fail the above test
      // with the following error:
      //   Error: NG0303: Can't bind to 'appSomeHeaderSticky' since it isn't a known property of 'div'
      //   (used in the 'StickyHeaderApp' component template).
      // If you comment out the below, things work as expected.
      ngMocks.flushTestBed();
    }
  })
});

@Component({
  template: `
    <div *appSomeHeader="'foo'; bar: true"></div>
  `,
  standalone: true,
  imports: [SomeHeaderDirective],
})
class HostComponent {}