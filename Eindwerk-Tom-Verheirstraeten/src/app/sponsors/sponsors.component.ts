import { Component, OnInit } from '@angular/core';
import * as info from '../../assets/jsons/dots&pix.json';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  title = 'partners';
  sponsors;
  constructor() { }

  ngOnInit(): void {
    this.sponsors = info.partners;
    console.log(this.sponsors);
  }

}
