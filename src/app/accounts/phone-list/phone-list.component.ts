import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Phone } from '../../domain';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  @Input()
  phoneNumbers: Phone[];

  @Output()
  validationError = new EventEmitter<string>();

  newPhone: Phone = {};

  constructor() { }

  ngOnInit() {
  }

  addPhone() {
    let valid = true;
    if (!this.newPhone.type) {
      // type not selected
      this.validationError.emit('Type Not Selected');
      valid = false;
    }

    if (!this.newPhone.number) {
      // type not selected
      this.validationError.emit('Number Not Provided');
      valid = false;
    }

    if (valid) {
      this.phoneNumbers.push(this.newPhone);
      this.newPhone = {};
    }
  }

}
