import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init({ mirror: true });
    this.router.navigate(['']);
    particlesJS('particles-js', ParticlesConfig, function () { });
  }
}










