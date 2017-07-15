import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() onUserButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  userButtonClicked(){
    this.onUserButtonClicked.emit();
  }
}
