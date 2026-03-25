private service = inject(MyService);

constructor(private service: MyService) {}

//for example
import { Component, inject } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-student',
  template: `<p>{{ data }}</p>`
})
export class StudentComponent {
  private service = inject(MyService);

  data = this.service.getData();
}
