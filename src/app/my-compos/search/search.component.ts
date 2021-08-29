import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; // [1]
// import { Component, OnInit, Input } from '@angular/core'; // [2][3][4]

import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Input() query: string | null = ''
  @Output() queryEmitter = new EventEmitter<string>() // [1]
  // @Input() submit: Function = function () { } // [2][3][4]

  form: any

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({ query: this.query })
  }

  onSubmit() { // [1]
    this.queryEmitter.emit(this.form.value.query)
  }

  // onSubmit() { // [2][3][4]
  //   this.submit(this.form.value.query)
  // }
}
