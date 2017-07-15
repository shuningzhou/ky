import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-slider',
  templateUrl: './right-slider.component.html',
  styleUrls: ['./right-slider.component.css']
})
export class RightSliderComponent implements OnInit {

  @Input() beenDisplayed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
