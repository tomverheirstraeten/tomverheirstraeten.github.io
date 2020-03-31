import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  constructor(private router: Router) { }
  activeIndex = 0;
  title = 'Tickets';

  formules = [
    {
      name: 'Student/Teacher',
      price: 'free',
      perks: []
    },
    {
      name: 'Early bird',
      price: '€45',
      perks: [
        'Untill July'
      ]
    },
    {
      name: 'standard',
      price: '€90',
      perks: ["-10% from 6 tickets"]
    },
    {
      name: 'all-in',
      price: '€250',
      perks: ['free food', 'free drinks', 'light sponsor']
    },

  ]


  giveClassCurrent(index) {
    this.activeIndex = index;
  }

  goToCheckout(index) {
    this.router.navigate(["/ticketcheckout", index]);
  }


  ngOnInit(): void {
  }




}
