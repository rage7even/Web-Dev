import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hello, Angular!';
  framework = 'Angular 21';

  userName = 'Student';
  imageUrl = 'https://th.bing.com/th/id/R.39552d3dea7012a52e50852dc0ef259e?rik=ABFIwHrUgNaW1w&pid=ImgRaw&r=0';
  imageAlt = 'AngularLogo';
  isDisabled = false;
  clickCnt = 0;
  twoWayText = '';

  onClick(): void {
    this.clickCnt++;
  }

  isD(): void {
    this.isDisabled = true;
  }

  isVisible = true;
  selectStatus = 'pending';

  products: Product[] = [
    {id:1, name: 'Laptop', price: 999, inStock: true},
    {id:2, name:'Phone', price:699, inStock: true}
  ];

  toggleVisiblity(): void {
    this.isVisible = !this.isVisible;
  }

  onStatusChange(e: Event): void{
    this.selectStatus = (e.target as HTMLSelectElement).value;
  }


  nickName = "rage7even";
  langs: Lang[] = [
    {id:1, nameOfLangs:'Java'},
    {id:2, nameOfLangs:'C++'},
    {id:3, nameOfLangs:'Python'},
    {id:4, nameOfLangs:'Go'}
  ]


  counter = 0;

  onClickPlus(): void {
    this.counter += 1;
  }
  onClickMinus(): void {
    this.counter -= 1;
    if(this.counter < 0){
      alert("Warnign: neagative number!")
    }
  }

  imgUrl: string = 'https://th.bing.com/th/id/R.39552d3dea7012a52e50852dc0ef259e?rik=ABFIwHrUgNaW1w&pid=ImgRaw&r=0';
  cnter = 0;
  Name1 = '';

  incrementCnter () {
    this.cnter++;
  }
}
