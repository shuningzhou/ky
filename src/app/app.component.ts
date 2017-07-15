import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  shouldShowRightSlider : boolean = false;

  showRightSlider()
  {
    this.shouldShowRightSlider = !this.shouldShowRightSlider;
  }
}

