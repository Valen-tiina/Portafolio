import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {

  private roles: string[] = ['Software Developer', 'Full Stack', 'Web Development', 'Problem Solving'];
  private ri: number = 0;
  private ci: number = 0;
  private deleting: boolean = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const typedEl = this.el.nativeElement.querySelector('#typedText') as HTMLElement;
    setTimeout(() => this.type(typedEl), 1000);
  }

  private type(typedEl: HTMLElement): void {
    const current = this.roles[this.ri];

    if (!this.deleting) {
      typedEl.textContent = current.slice(0, ++this.ci);
      if (this.ci === current.length) {
        this.deleting = true;
        setTimeout(() => this.type(typedEl), 1800);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, --this.ci);
      if (this.ci === 0) {
        this.deleting = false;
        this.ri = (this.ri + 1) % this.roles.length;
      }
    }

    setTimeout(() => this.type(typedEl), this.deleting ? 45 : 75);
  }
}