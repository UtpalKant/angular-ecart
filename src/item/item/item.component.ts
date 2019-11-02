import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/products.service';
import { Item } from 'src/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public products: Item[];

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    console.log('In item component');
    this.productSvc.getItems()
    .subscribe(items => {
      this.products = items;
      console.table(this.products);
    }, error=>{
      console.table(error);
    });
  }

}
