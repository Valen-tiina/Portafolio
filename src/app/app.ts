import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { Certifications } from './components/certifications/certifications';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
    standalone: true,

  imports: [RouterOutlet, Nav, Footer, Certifications, Experience, Hero, Projects, Skills, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  ngAfterViewInit() {
    const cursor: any = document.getElementById('cursor');
    const ring: any = document.getElementById('cursorRing');

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
      }
    });

    function animateRing() {
      if (ring) {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      requestAnimationFrame(animateRing);
    }
    animateRing();
  }
}