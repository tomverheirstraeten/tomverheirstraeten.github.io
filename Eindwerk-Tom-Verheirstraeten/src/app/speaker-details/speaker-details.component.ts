import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as info from '../../assets/jsons/dots&pix.json';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  title = 'keynote speakers';
  index;
  activeIndex = 0;
  artists;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.router.snapshot.paramMap.get('id');
    console.log(this.index);
    this.artists = info.default.artists;
  }

  giveCarouselIndex(index) {
    this.activeIndex = index;
  }

}
