import { Component, OnInit } from '@angular/core';
import { KyForm } from '../../lib/ky-form';
import { KyItem } from '../../lib/ky-item';
import { User } from '../../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  kyForm : KyForm

  constructor() { }

  ngOnInit() {
    this.user = {
      name: "Peter",
      age: 25,
      address: "810 Saddle Street",
      birthDate: "2017-04-03"
    };

    this.makeForm("Peter Form", 4);
    this.addTextInput("name", "Name", "Jason", 1, 1);
    this.addNumberInput("age", "Age", "Jason", 1, 1);
    this.addTextInput("address", "Address", "Jason", 1, 1);
    this.addDateInput("birthDate", "Birthday", "Jason", 1, 1);
    this.addDateInput("birthDate", "Birthday1", "Jason", 1, 1);
    this.addDateInput("birthDate", "Birthday2", "Jason", 1, 1);
    this.addDateInput("birthDate", "Birthday3", "Jason", 1, 1);
    this.addDateInput("birthDate", "Birthday4", "Jason", 1, 1);
    this.addDateInput("birthDate", "Birthday5", "Jason", 1, 1);
  }

  makeForm(title, cols) {
    this.kyForm = new KyForm();
    this.kyForm.items = [];
    this.kyForm.title = title;
    this.kyForm.cols = cols;
  }

  addTextInput(valuePath, placeHolder, defaultValue, rows, cols){
    let kyItem : KyItem = new KyItem();
    kyItem.valuePath = valuePath;
    kyItem.placeHolder = placeHolder;
    kyItem.defaultValue = defaultValue;
    kyItem.itemType = KyItem.ITEM_TPYE_TEXT;
    kyItem.rows = rows;
    kyItem.cols = cols;
    this.kyForm.items.push(kyItem);
  }

  addNumberInput(valuePath, placeHolder, defaultValue, rows, cols){
    let kyItem : KyItem = new KyItem();
    kyItem.valuePath = valuePath;
    kyItem.placeHolder = placeHolder;
    kyItem.defaultValue = defaultValue;
    kyItem.itemType = KyItem.ITEM_TPYE_NUMBER;
    kyItem.rows = rows;
    kyItem.cols = cols;
    this.kyForm.items.push(kyItem);
  }

  addDateInput(valuePath, placeHolder, defaultValue, rows, cols){
    let kyItem : KyItem = new KyItem();
    kyItem.valuePath = valuePath;
    kyItem.placeHolder = placeHolder;
    kyItem.defaultValue = defaultValue;
    kyItem.itemType = KyItem.ITEM_TPYE_DATE;
    kyItem.rows = rows;
    kyItem.cols = cols;
    this.kyForm.items.push(kyItem);
  }

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
