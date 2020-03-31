import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  title = "keynote speakers";
  index;
  artists = [{
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  }, {
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  }, {
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  }, {
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  }, {
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  }, {
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  }, {
    name: "",
    caption: "",
    info: "",
    socials: [{
      insta: {
        icon: "",
        url: "",
      },
      fb: "",
      linked: ""
    }]

  },]
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.router.snapshot.paramMap.get("id");
    console.log(this.index);
  }

}
