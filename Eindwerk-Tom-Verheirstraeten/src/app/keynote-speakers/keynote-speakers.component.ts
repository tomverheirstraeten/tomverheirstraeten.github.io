import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as info from '../../assets/jsons/dots&pix.json';


@Component({
  selector: 'app-keynote-speakers',
  templateUrl: './keynote-speakers.component.html',
  styleUrls: ['./keynote-speakers.component.css']
})
export class KeynoteSpeakersComponent implements OnInit {
  title = 'keynote speakers'
  speakers;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(info.default.artists);
    this.speakers = info.default.artists;
    console.log(this.speakers)
  }
}
