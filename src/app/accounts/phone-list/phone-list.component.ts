import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../../domain';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  @Input()
  phoneNumbers: Phone[];

  newPhone: Phone = {};

  constructor() { }

  ngOnInit() {
  }

  addPhone() {
    this.phoneNumbers.push(this.newPhone);
    this.newPhone = {};
  }

}
