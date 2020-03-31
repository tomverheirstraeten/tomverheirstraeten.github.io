import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ticket-checkout',
  templateUrl: './ticket-checkout.component.html',
  styleUrls: ['./ticket-checkout.component.css']
})
export class TicketCheckoutComponent implements OnInit {
  title = "tickets";
  activeIndex;
  index;
  currentformula;
  currentprice;
  show = true;
  total = 0;
  amount = 0;
  showdiscount = false;

  formules = [
    {
      name: 'Student/Teacher',
      price: '0',
      perks: []
    },
    {
      name: 'Early bird',
      price: '45',
      perks: [
        'Untill July'
      ]
    },
    {
      name: 'standard',
      price: '90',
      perks: []
    },
    {
      name: 'all-in',
      price: '250',
      perks: ['free food', 'free drinks', 'light sponsor']
    },

  ]

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.router.snapshot.paramMap.get("index");
    for (let i in this.formules) {
      if (i == this.index) {
        this.currentformula = this.formules[i].name;
        this.currentprice = this.formules[i].price;
        this.activeIndex = this.index;
      }
    }

  }

  setnewCurrent(index) {
    for (let i in this.formules) {
      if (i == index) {
        this.currentformula = this.formules[i].name;
        this.currentprice = this.formules[i].price;
      }
    }
  }

  slidedown() {
    this.show = false;

  }
  slideup() {
    this.show = true;
    this.calculateprice();
  }

  giveClassCurrent(index) {
    this.activeIndex = index;
  }
  addAmount() {
    this.amount++;
    this.calculateprice();
  }
  removeAmount() {

    if (this.amount == 0) {
      return
    } else { this.amount--; }
    this.calculateprice();
  }
  calculateprice() {

    if (this.activeIndex == 2 && this.amount >= 6) {
      this.total = (this.amount * this.currentprice) * 0.9;
      this.showdiscount = true;

    } else {
      this.total = this.amount * this.currentprice;
      this.showdiscount = false;
    }
  }






}
