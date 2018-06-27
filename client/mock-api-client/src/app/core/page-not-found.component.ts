import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>Ups</h1>
    <h2>The requested page doesn't exist</h2>
    <h2>Get back to <a [routerLink]="'/'">home</a></h2>
  `,
  styles: [``]
})
export class PageNotFoundComponent {
}
