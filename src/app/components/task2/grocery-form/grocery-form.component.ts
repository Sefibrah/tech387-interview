import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Grocery, GroceryService } from '../services/grocery.service';

@Component({
  selector: 'app-grocery-form',
  templateUrl: './grocery-form.component.html',
  styleUrls: ['./grocery-form.component.sass']
})
export class GroceryFormComponent implements OnInit {
  grocery: Grocery
  isEdit: boolean = false

  @ViewChild('groceryForm') groceryForm: NgForm

  constructor(private route: ActivatedRoute, private groceryService: GroceryService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      if (p.id != null) {
        const i = this.groceryService.groceries.findIndex(g => g.id == p.id)
        this.grocery = this.groceryService.groceries[i]
        this.isEdit = true
      } else {
        this.grocery = {id: null, name: '', description: '', imgUrl: ''}
        this.isEdit = false
      }
    })
  }

  onSubmit() {
    if (this.groceryForm.form.valid) {
      const id = this.groceryService.getLastId()
      this.isEdit
        ? this.groceryService.updateGrocery(this.grocery)
        : this.groceryService.createGrocery({ id, ...this.groceryForm.form.value })
      this.groceryForm.resetForm()
      // alert('saved a grocery')
      this.router.navigate(['/task2', 'grocery-list'])
    } else {
      this.groceryForm.resetForm()
      // alert('error occured when making a new grocery')
    }
  }

}
