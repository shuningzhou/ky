import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { KyItem } from '../ky-item';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ky-form-item-control',
  templateUrl: './ky-form-item-control.component.html',
  styleUrls: ['./ky-form-item-control.component.css']
})
export class KyFormItemControlComponent implements OnInit {

  @Input() model: any;
  @Input() item: KyItem;

  control:FormControl;

  constructor() { 
    this.control = new FormControl();
  }

  ngOnInit() {
    this.control.setValidators(this.item.validators);
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        let message = this.item.getValidatorErrorMessage(propertyName);
        return message;
      }
    }
    return null;
  }

}
