import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.sass']
})
export class Task1Component implements OnInit {

  objectString: string = ''
  path: string = ''
  value: string

  constructor() { }

  ngOnInit(): void {
  }

  findPropertyValue() {
    let objectTemp = null, valueTemp = null
    if (this.objectString == '' || this.objectString == null) objectTemp = JSON.parse('{ "property1": { "property2": "Apple", "property3": "Orange" } }')
    else objectTemp = JSON.parse(this.objectString)
    if (this.path == '' || this.path == null) this.path = 'property1.property2'
    let properties = this.path.split('.')
    properties.forEach(p => {
      valueTemp != null
        ? valueTemp = valueTemp[p]
        : valueTemp = objectTemp[p]
    });
    this.value = valueTemp
  }

}
