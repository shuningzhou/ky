import { Component, OnInit, Input } from '@angular/core';
import { KyForm } from '../ky-form';
import { FormControl, FormGroup } from '@angular/forms';
import { KyItem } from '../ky-item';

@Component({
  selector: 'app-ky-form-control',
  templateUrl: './ky-form-control.component.html',
  styleUrls: ['./ky-form-control.component.scss']
})
export class KyFormControlComponent implements OnInit {

  @Input() model: any;
  @Input() kyForm: KyForm;
  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.model);
    console.log(this.kyForm);

    this.myForm = new FormGroup({

    });
  }

}
