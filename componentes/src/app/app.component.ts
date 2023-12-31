import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que o componente é independente de módulo
  imports: [CommonModule, RouterOutlet], // Importação de módulos, components etc.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
    // tem providers também, inputs, outputs, exportAs igual da versão abaixo da 17
})
export class AppComponent {
  title = 'Componentes';
}
