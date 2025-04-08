import { Component } from '@angular/core';
import { AfterViewInit, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

interface Plato {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  detalles: string;
}

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})


export class CartaComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }

  @HostListener('document:keydown.escape', ['$event'])
handleEscapeKey(event: KeyboardEvent) {
  if (this.selectedPlato) {
    this.cerrarModal();
  }
}

  selectedPlato: Plato | null = null;

  abrirModal(plato: Plato) {
    this.selectedPlato = plato;
  }

    cerrarModal() {
      this.selectedPlato = null;
    }
}
