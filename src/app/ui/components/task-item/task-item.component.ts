import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../../domain/task.model.js';

@Component({

    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']

})

export class TaskItemComponent
{
    //Recibe una tarea
    @Input() tarea!: Task;

    //Eventos hacia el componente padre
    @Output() toggle = new EventEmitter<number>();
    @Output() eliminar = new EventEmitter<number>();

    //Emite el evento de toggle con el id de la tarea
    onToggle() {
        this.toggle.emit(this.tarea.id);
    }   

    //Emite el evento de eliminar con el id de la tarea
    onEliminar() {
        this.eliminar.emit(this.tarea.id);
    }
    
}