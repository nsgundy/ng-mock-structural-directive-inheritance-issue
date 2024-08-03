# Reproduction of `ng-mocks` breaking structural directive inheritance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

Run `npx ng test --browsers=ChromeHeadless` to execute the unit tests via [Karma](https://karma-runner.github.io). You should see one test fail, unless you comment out the one place where `ng-mocks` is used in `src/app/some-header.directive.spec.ts`.
