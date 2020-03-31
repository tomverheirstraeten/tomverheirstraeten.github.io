import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-keynote-speakers',
  templateUrl: './keynote-speakers.component.html',
  styleUrls: ['./keynote-speakers.component.css']
})
export class KeynoteSpeakersComponent implements OnInit {
  title = 'keynote speakers'

  lorem = 'Dries Depoorter is a Belgium artist that handles themes as privacy, artificial intelligence, surveillance & social media. Depoorter creates interactive installations, apps, games.\n\nDepoorter exhibited internationally at the Barbican, MUTEK Festival, Art Basel, Bozar, Para Site Hong Kong, Mozilla – The Glass Room San Francisco, HEK Basel, WIRED, IDFA Doclab, Mundaneum, FOMU, Ars Electronica, Athens Digital Art Festival, Art Soutterain, STRP festival, Heidelberger Kunstverein.';

  speakers = [{
    name: 'Dries Depoortere',
    img: '../../assets/images/dries.jpg',
    text: 'Dries Depoorter is a Belgium artist that handles themes as privacy, artificial intelligence, surveillance & social media. Depoorter creates interactive installations, apps, games.\n\nDepoorter exhibited internationally at the Barbican, MUTEK Festival, Art Basel, Bozar, Para Site Hong Kong, Mozilla – The Glass Room San Francisco, HEK Basel, WIRED, IDFA Doclab, Mundaneum, FOMU, Ars Electronica, Athens Digital Art Festival, Art Soutterain, STRP festival, Heidelberger Kunstverein.'
  }, {
    name: 'Es Devlin',
    img: '../../assets/images/es1.jpg',
    text: this.lorem
  }, {
    name: 'Neil Harbisson',
    img: '../../assets/images/neilHarb.jpg',
    text: this.lorem
  }, {
    name: 'Stefan Sagmeister',
    img: '../../assets/images/stefan.jpg',
    text: this.lorem
  }, {
    name: 'Neil Mendoza',
    img: '../../assets/images/neil1.jpg',
    text: this.lorem
  }, {
    name: 'Daan Roosegaarden',
    img: '../../assets/images/Daan.jpg',
    text: "Dutch artist and innovator Daan Roosegaarde (1979) is a creative thinker and maker of social designs which explore the relation between people, technology and space.From an early age Roosegaarde has been driven by nature’s gifts such as luminous fireflies or jellyfishes. His fascination for nature and technology is reflected in his iconic works such as SMOG FREE PROJECT (the largest outdoor air purifier which turns smog into jewellery), VAN GOGH PATH (bicycle path which glows at night), and his most recent SPACE WASTE LAB to visualise and capture space waste.Roosegaarde studied Fine Arts and graduated from The Berlage Institute in Rotterdam with a Master in architecture. He founded Studio Roosegaarde in 2007, where he works with his team of designers and engineers on landscapes of the future."
  }, {
    name: 'Seth Godin',
    img: '../../assets/images/seth.jpeg',
    text: this.lorem
  }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {

  }



}
