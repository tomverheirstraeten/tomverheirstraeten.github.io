import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import SmokeMachine from '@bijection/smoke';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadTickets() {
    this.router.navigate(['Tickets'])
  }
  loadHome() {
    this.router.navigate([''])
  }



}














