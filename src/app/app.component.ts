import { Component, ViewChild } from '@angular/core';
import {MdSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  shouldShowRightSlider : boolean = false;

  @ViewChild('userSidenav') userSidenav:MdSidenav;

  constructor(){
  }

  toggleUserSidenav()
  {
    this.userSidenav.toggle();
  }
}

