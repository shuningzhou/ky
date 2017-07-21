import { Component, OnInit, Input } from '@angular/core';
import { KyItem } from '../ky-item';

@Component({
  selector: 'app-ky-form-item-control',
  templateUrl: './ky-form-item-control.component.html',
  styleUrls: ['./ky-form-item-control.component.css']
})
export class KyFormItemControlComponent implements OnInit {

  @Input() model: any;
  @Input() item: KyItem;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
    console.log(this.model);
    console.log(this.item.ITEM_TPYE_TEXT);
  }

}
