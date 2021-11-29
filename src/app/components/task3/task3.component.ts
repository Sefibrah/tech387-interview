import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.sass']
})
export class Task3Component implements OnInit {
  arrayString: string
  array: any[] = [{ id: 1, value: 3 }, { id: 2, value: 7 }, { id: 3, value: 3 }, { id: 4, value: 1 }, { id: 5, value: 4 }]
  value: any

  constructor() { }

  ngOnInit(): void {
  }

  findUniqueIdAndValue() {
    this.parseArray()
    this.value = { id: this.findUniqueId(), value: this.findUniqueValue() }
  }

  parseArray() {
    if (this.arrayString != '' && this.arrayString != null && this.arrayString != undefined)
      this.array = JSON.parse(this.arrayString)
  }

  findUniqueId() {
    for (let i = 0; i < this.array.length; i++) {
      const el = this.array[i]
      if (this.array[i + 1] != null || this.array[i + 1] != undefined) {
        if (this.array[i + 1].id - el.id != 1)
          return el.id + 1
      } else
        return el.id + 1
    }
  }

  findUniqueValue() {
    const duplicateElements = this.findDuplicates(this.array);
    let candidate = null
    for (let i = 0; i < duplicateElements.length; i++) {
      const start = this.indexOfObject(duplicateElements[i])
      for (let j = start; j < this.array.length; j++) {
        const el = this.array[j];
        if (this.array[j + 1] != null) {
          const nextEl = this.array[j + 1]
          if (nextEl.value > el.value) {
            if (this.array.find(obj => obj.value == nextEl.value + 1) == undefined)
              candidate = nextEl.value + 1
          }
        }
      }
    }
    if (candidate == null) {
      let arr = this.array.map(o => { return o.value })
      candidate = Math.max(...arr) + 1
    }
    return candidate
  }

  findDuplicates(arry) {
    const uniqueElements = new Set(this.array.map(o => { return o.value }));
    const filteredElements = arry.filter(item => {
      if (uniqueElements.has(item.value)) {
        uniqueElements.delete(item.value);
      } else {
        return item.value;
      }
    });
    return [...new Set(filteredElements)]
  }

  indexOfObject(o) {
    return this.array.indexOf(o)
  }

}
