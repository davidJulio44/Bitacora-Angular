import { Injectable } from '@angular/core';
import { Task } from '../domain/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // estado interno de tareas
  private tareas: Task[] = [];

  // obtener tareas
  getTareas(): Task[] {
    return this.tareas;
  }

  // agregar tarea
  agregar(tarea: Omit<Task, 'id' | 'completada'>) {

    const nueva: Task = {
      id: Date.now(),
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      completada: false
    };

    this.tareas = [...this.tareas, nueva];
  }

  // toggle
  toggle(id: number) {
    this.tareas = this.tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
  }

  // eliminar
  eliminar(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}