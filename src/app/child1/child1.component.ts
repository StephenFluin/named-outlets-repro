import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works! <a [routerLink]="[{outlets: {tutorial: 'b'}}]">Next Tutorial Setup</a>
    </p>
  `,
  styles: [
  ]
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
