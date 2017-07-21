import { Component, OnInit } from '@angular/core';
import { KyFormControlComponent } from '../../lib/ky-form-control/ky-form-control.component';

@Component({
  selector: 'app-client-form',
  templateUrl: '../../lib/ky-form-control/ky-form-control.component.html',
  styleUrls: ['../../lib/ky-form-control/ky-form-control.component.scss']
})
export class ClientFormComponent extends KyFormControlComponent {

  initializeForm()
  {
    this.model = {
      name: "Peter Zhou",
      age: 25,
      email: "",
      date: "2017-04-03"
    };

    this.makeForm("Peter", 6);

    this.addTextInput("name", "Name", "", 1, 1, true, 10, 11, null);
    let item = this.addTextInput("email", "Email", "", 1, 1, false, 0, 0, null);
    item.errorMessageConfig.invalidEmailAddress = "Email格式错误";
    item.validators.push(this.emailValidator);
  }

  emailValidator(control) {
      if (control.value == null){
        return null;
      }

      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
          return null;
      } else {
          return { 'invalidEmailAddress': true };
      }
  }

  onSubmit() {
    console.log(this.model);
  }
}
