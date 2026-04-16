import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../../domain/task.model.js';
import { TaskItemComponent } from '../task-item/task-item.component.js';
import { CommonModule } from '@angular/common';

@Component
({
    selector: 'app-task-list',
    standalone: true,
    imports: [TaskItemComponent, CommonModule],
    templateUrl: './task-list.component.html',
})


export class TaskListComponent
{
    //Recibe la lista de tareas del componente padre
    @Input() tareas: any[] = [];

    //Reenvia los eventos al padre
    @Output() eliminar = new EventEmitter<number>();
    @Output() toggle = new EventEmitter<number>();

}