import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnChanges {
  @Input() products: any[] = [];
   ngOnChanges(changes: SimpleChanges): void {
     if(changes['products']) {
       console.log('Product list changed:', changes['products'].currentValue);
     }
   }

}
