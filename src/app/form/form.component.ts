import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.message = ""
  }

  message = "";
  input = "";

  validate(str: string): void {
    this.input = str
    if (str.includes('-')) str = str.replace(/-/g, '');
    if (str.length !== 16) {
      this.message = 'Invalid card length';
      return;
    }
    if (isNaN(parseInt(str))) {
      this.message = "Invalid number"
      return;
    }
    let evens = '';
    for (let i = 0; i < str.length; i += 2) {
      evens += (parseInt(str[i]) * 2);
    }

  }
}
