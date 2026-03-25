import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="newTask">
    <button (click)="addTask()">Add</button>
  `
})
export class TaskComponent {
  newTask: string = "";

  addTask() {
    console.log("Добавлено:", this.newTask);
  }
}
