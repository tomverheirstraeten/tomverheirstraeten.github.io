import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as info from '../../assets/jsons/dots&pix.json';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  constructor(private router: Router) { }
  activeIndex = 0;
  title = 'Tickets';

  formules;


  giveClassCurrent(index) {
    this.activeIndex = index;
  }

  goToCheckout(index) {
    this.router.navigate(['/ticketcheckout', index]);
  }


  ngOnInit(): void {
    this.formules = info.default.tickets;
  }




}
