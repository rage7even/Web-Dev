import { Component, input, output, OnInit, OnDestroy} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  id = input.required<number>();
  name = input.required<string>();
  price = input.required<number>();
  image = input.required<string>();

  delete = output<number>();

  onDelete(){
    this.delete.emit(this.id());
  }

  liked = output<number>();

  likesCnt = 0;
  onLike(){
    this.likesCnt++;
    this.liked.emit(this.id());
  }

  isNew = true;
  timer = 0;
  intervalId: any;
  // ngOnInit() {
  //   console.log(`ProductCard created for: ${this.name()} (ID: ${this.id()})`);
  //   this.intervalId = setInterval(() => {this.timer++}, 1000);
  //   setInterval(() => {this.isNew = false}, 2000);
  // }
  //
  // ngOnDestroy() {
  //   console.log(`ProductCard destroyed for: ${this.name()} (ID: ${this.id()})`);
  //   clearTimeout(this.intervalId);
  // }

}
