import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './cabecero.component/cabecero.component';
import { FormularioComponent } from './formulario.component/formulario.component';
import { IngresoComponent } from './ingreso.component/ingreso.component';
import { EgresosComponent } from './egresos.component/egresos.component';
import { Ingreso } from './ingreso.component/ingreso.model';
import { Egreso } from './egresos.component/egreso.model';
import { IngresoService } from './ingreso.component/ingreso.service';
import { EgresoService } from './egresos.component/egreso.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceroComponent, FormularioComponent, IngresoComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   ingresos: Ingreso[] = []; 
   egresos: Egreso[] = [];

   constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
   ) {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
   }

   getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => { 
      ingresoTotal += ingreso.valor;
    } );
    return ingresoTotal;
   }

   getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
   }

   getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
   }

   getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
   }
}
