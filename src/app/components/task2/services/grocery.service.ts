import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Grocery {
  id: number
  name: string
  description: string
  imgUrl: string
}

const groceries: Grocery[] = [
  {
    id: 1,
    name: 'Apple',
    description: 'Big, red and juicy apple',
    imgUrl: 'https://www.cppng.com/file/download/2020-06/9-apple-png-image.png'
  },
  {
    id: 2,
    name: 'Bananas',
    description: 'Skinny, yellow and sweet bananas',
    imgUrl: 'https://www.cppng.com/file/download/2020-06/3-2-banana-png-picture.png'
  },
  {
    id: 3,
    name: 'Orange',
    description: 'Round, orange and tasty orange',
    imgUrl: 'https://pngimg.com/uploads/orange/orange_PNG799.png'
  },
]

@Injectable({
  providedIn: 'root'
})

export class GroceryService {
  groceriesSubject = new BehaviorSubject<Grocery[]>(groceries)
  groceries$ = this.groceriesSubject.asObservable()

  public get groceries(): Grocery[] {
    return this.groceriesSubject.getValue()
  }
  public set groceries(val) {
    this.groceriesSubject.next(val)
  }

  constructor() { }

  createGrocery(grocery: Grocery) {
    this.groceries.push(grocery)
  }

  updateGrocery(grocery: Grocery) {
    const i = this.groceries.findIndex(g => g.id == grocery.id)
    this.groceries[i] = { ...grocery }
    console.log(this.groceries)
  }

  deleteGrocery(id: number) {
    const i = this.groceries.findIndex(g => g.id == id)
    this.groceries.splice(i, 1)
  }

  getLastId() {
    if (this.groceries[this.groceries.length - 1] != null)
      return this.groceries[this.groceries.length - 1].id + 1
    else
      return 1
  }
}
