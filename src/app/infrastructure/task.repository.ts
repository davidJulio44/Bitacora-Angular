import { Task } from '../domain/task.model.js';

// Simulación base de datos en memoria
export class TaskRepository {
  private tareas: Task[] = [];

  obtenerTareas(): Task[] {
    return this.tareas;
  }

  guardar(tarea: Task): void {
    this.tareas.push(tarea);
  }

  eliminar(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  toggle(id: number): void {
    this.tareas = this.tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );
  }
}