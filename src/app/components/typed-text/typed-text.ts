import { Component } from '@angular/core';

@Component({
  selector: 'app-typed-text',
  imports: [],
  templateUrl: './typed-text.html',
  styleUrl: './typed-text.css',
})
export class TypedText {

}
 const roles: string[] = ["Developer", "Designer", "Problem Solver"];
let ri: number = 0; 
let ci: number = 0;
let deleting: boolean = false;

const typedEl = document.querySelector<HTMLElement>('#typed-text');

function type(): void {
  if (!typedEl) return;

  const current: string = roles[ri];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++ci);
    
    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --ci);
    
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }


  setTimeout(type, deleting ? 45 : 75);
}

setTimeout(type, 1000);