import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub[testString][testBool][testNumber]',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  @Input() testString: string
  @Input() testBool: boolean
  @Input() testNumber: number

  constructor() { }

  ngOnInit() {
    this.handleString(this.testString)
  }

  handleString(val: string): void {
    console.log(val.charAt(1))
  }

}
