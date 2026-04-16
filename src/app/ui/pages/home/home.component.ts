import { Component } from '@angular/core';
import { TaskService } from '../../../application/task.service';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public taskService: TaskService) {}

  agregarTarea(tarea: any) {
    console.log('LLEGA:', tarea);
    this.taskService.agregar(tarea);
  }

  toggleTarea(id: number) {
    this.taskService.toggle(id);
  }

  eliminarTarea(id: number) {
    this.taskService.eliminar(id);
  }
}