import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.sass']
})
export class GroceryListComponent implements OnInit {

  constructor(public groceryService: GroceryService) { }

  ngOnInit(): void {
  }

}
