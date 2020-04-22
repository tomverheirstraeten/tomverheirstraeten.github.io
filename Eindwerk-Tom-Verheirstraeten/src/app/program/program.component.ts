import { Component, OnInit } from '@angular/core';
import * as info from '../../assets/jsons/dots&pix.json';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  title = "program"
  program;
  activeIndex = 1;
  constructor() { }

  ngOnInit(): void {
    this.program = info.timetable;
    console.log(this.program);
  }

}
