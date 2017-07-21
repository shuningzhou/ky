import { Component, OnInit, Input } from '@angular/core';
import { KyForm } from '../ky-form';
import { FormControl, FormGroup } from '@angular/forms';
import { KyItem } from '../ky-item';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ky-form-control',
  templateUrl: './ky-form-control.component.html',
  styleUrls: ['./ky-form-control.component.scss']
})
export class KyFormControlComponent implements OnInit {

  @Input() model: any;
  @Input() kyForm: KyForm;
  myForm: FormGroup;
  actualCols: number;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({

    });

    this.initializeForm();
  }

  initializeForm(){

  }

  makeForm(title, cols) {
    this.kyForm = new KyForm();
    this.kyForm.items = [];
    this.kyForm.title = title;
    this.kyForm.cols = cols;
    this.actualCols = this.kyForm.cols;
  }

  addTextInput(valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern){
    return this.addInput(KyItem.ITEM_TPYE_TEXT, valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern);
  }

  addNumberInput(valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern){
    return this.addInput(KyItem.ITEM_TPYE_NUMBER, valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern);
  }

  addDateInput(valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern){
    return this.addInput(KyItem.ITEM_TPYE_DATE, valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern);
  }

  addInput(type, valuePath, placeHolder, defaultValue, rows, cols, required, minLength, maxLength, pattern)
  {
    let kyItem : KyItem = new KyItem();
    kyItem.validators = [];

    kyItem.valuePath = valuePath;
    kyItem.placeHolder = placeHolder;
    kyItem.defaultValue = defaultValue;
    kyItem.itemType = type;
    kyItem.rows = rows;
    kyItem.cols = cols;

    if (required){
      kyItem.errorMessageConfig.required = "必须填写";
      kyItem.validators.push(Validators.required);
    }

    if (minLength != 0){
      kyItem.errorMessageConfig.minlength = "不可少于" + minLength + "个字符";
      kyItem.validators.push(Validators.minLength(minLength));
    }

    if (maxLength != 0){
      kyItem.errorMessageConfig.maxlength = "不可多于" + maxLength + "个字符";
      kyItem.validators.push(Validators.maxLength(maxLength));
    }

    if (pattern != null){
      kyItem.errorMessageConfig.pattern = "格式错误";
      kyItem.validators.push(Validators.pattern(pattern));
    }


    this.kyForm.items.push(kyItem);

    return kyItem;
  }

  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);

    if (element > 1900) {
      this.actualCols = this.kyForm.cols;
    }
    else if (element > 1400) {
      this.actualCols = this.kyForm.cols - 1;
    }
    else if (element > 1000) {
      this.actualCols = this.kyForm.cols - 2;
    }
    else if (element > 600) {
      this.actualCols = this.kyForm.cols - 3;
    }
    else{
      this.actualCols = 2;
    }

    console.log(this.actualCols);
  }
}
