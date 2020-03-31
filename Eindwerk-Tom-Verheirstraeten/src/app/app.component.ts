import { Component } from '@angular/core';
import { Router } from '@angular/router';

import AOS from 'aos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  title = 'Eindwerk-Tom-Verheirstraeten';
  ngOnInit(): void {
    AOS.init({ mirror: true });
    this.router.navigate(['']);
  }

}




