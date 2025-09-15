import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './cabecero.component/cabecero.component';
import { FormularioComponent } from './formulario.component/formulario.component';
import { IngresoComponent } from './ingreso.component/ingreso.component';
import { EgresosComponent } from './egresos.component/egresos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceroComponent, FormularioComponent, IngresoComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('app-presupuesto');
}
