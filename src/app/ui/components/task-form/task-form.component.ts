import {Component, EventEmitter, Output} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {

  //Envia la tarea al componente padre
  @Output() agregar = new EventEmitter();

  //El formulario completo
  form: FormGroup;

  constructor(private fb: FormBuilder){

    //Se construye el formulario con validaciones
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['']
    })
  }

  onSubmit() {

    //Si el formulario es invalido, marca todos los campos y no continua
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    //Envia el contenido al componente padre
    this.agregar.emit({
      titulo: this.form.value.titulo,
      descripcion: this.form.value.descripcion
    });

    //Limpia el formulario
    this.form.reset();
  }

}
