import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../domain/task.model';

@Component({
  selector: 'app-task-item', // etiqueta HTML que usarás
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() tarea!: Task; // recibe la tarea desde el padre

  @Output() toggle = new EventEmitter<number>(); // emite evento
  @Output() eliminar = new EventEmitter<number>();

  getDescripcionCorta(texto: string | undefined): string {
    if (!texto) return ''; // evita error si viene vacío

    return texto.length > 30
      ? texto.substring(0, 30) + '...'
      : texto;
  }

  // Método que emite el toggle
  onToggle() {
    this.toggle.emit(this.tarea.id);
  }

  // Método que emite eliminar
  onEliminar() {
    this.eliminar.emit(this.tarea.id);
  }
}