import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../application/task.service.js';
import { Task } from '../../../domain/task.model.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  tareas: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tareas = this.taskService.obtenerTodas();
  }

  agregar(titulo: string, descripcion: string): void {
    this.taskService.agregar(titulo, descripcion);
    this.tareas = this.taskService.obtenerTodas();
  }

  eliminar(id: number): void {
    this.taskService.eliminar(id);
    this.tareas = this.taskService.obtenerTodas();
  }

  toggle(id: number): void {
    this.taskService.toggle(id);
    this.tareas = this.taskService.obtenerTodas();
  }
}