import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {

  titulo: string = '';
  descripcion: string = '';

  @Output() agregar = new EventEmitter<{titulo: string, descripcion: string}>();

  onSubmit() {
    if (!this.titulo) {
      alert('El título es obligatorio');
      return;
    }

    this.agregar.emit({
      titulo: this.titulo,
      descripcion: this.descripcion
    });

    // limpiar campos
    this.titulo = '';
    this.descripcion = '';
  }
}