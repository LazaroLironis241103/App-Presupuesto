import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso.component/ingreso.service';
import { EgresoService } from '../egresos.component/egreso.service';
import { Ingreso } from '../ingreso.component/ingreso.model';
import { Egreso } from '../egresos.component/egreso.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo: string = "ingresoOperacion";
  // Definimos los input del formulario
  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) {

  }

  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarValor() {
    if(this.descripcionInput != null && this.valorInput != null) {
      if(this.tipo === "ingresoOperacion") {
        this.ingresoService.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      }
      else {
        this.egresoService.egresos.push(
          new Egreso(this.descripcionInput, this.valorInput)
        );
      }
    }
    else {
      console.log('Introduce valores en descripcion y valor validos'); 
    }
    //Limpiar formulario
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
