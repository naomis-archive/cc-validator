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
    this.message = '';
    this.input = "";
    this.len = 0;
    this.type=""
  }

  message = '';
  input = '';
  len = 0;
  type=""

  validate(str: string): void {
    this.input = str;
    this.len = str.length
    if (str.includes('-')) str = str.replace(/-/g, '');
    if (str.length < 13 || str.length > 16) {
      this.message = 'Invalid card length';
      return;
    }
    if (isNaN(parseInt(str))) {
      this.message = 'Invalid number';
      return;
    }
    if (str.startsWith("34") || str.startsWith("37")) {
      this.type = "American Express"
      if (str.length !== 15) {
        this.message = "Invalid American Express number"
        return;
      }
    }
    if (str.startsWith("51") || str.startsWith("52") || str.startsWith("53") || str.startsWith("54") || str.startsWith("55"))  {
      this.type =
    }
    let evens = '',
      oddSum = 0;
    for (let i = 0; i < str.length; i += 2) {
      evens += (parseInt(str[i]) * 2).toString();
    }
    for (let i = 1; i < str.length; i += 2) {
      oddSum += parseInt(str[i]);
    }
    let evenSum = 0;
    for (let i = 0; i < evens.length; i++) {
      evenSum += parseInt(evens[i]);
    }
    let checkSum = evenSum + oddSum;
    if (checkSum % 10) {
      this.message = 'Invalid checksum.';
      return;
    }
  }
}
