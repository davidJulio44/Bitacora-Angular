import { Injectable } from '@angular/core';
import { Task } from '../domain/task.model.js';
import { TaskRepository } from '../infrastructure/task.repository.js';

@Injectable({
  providedIn: 'root' // maneja la inyección de dependecias
})
export class TaskService {

  private repo = new TaskRepository(); // conexión a datos

  obtenerTodas(): Task[] {
    return this.repo.obtenerTareas();
  }

  agregar(titulo: string, descripcion: string): void {
    if (!titulo) {
      throw new Error('El título es obligatorio');
    }

    const tarea: Task = {
      id: Date.now(),
      titulo,
      descripcion,
      completada: false
    };

    this.repo.guardar(tarea);
  }

  eliminar(id: number): void {
    this.repo.eliminar(id);
  }

  toggle(id: number): void {
    this.repo.toggle(id);
  }
}