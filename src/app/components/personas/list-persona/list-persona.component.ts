import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/teambea_personas';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  personas: Persona[] = [];

  ngOnInit(): void {
    this.llenarPersona()
  }

  llenarPersona() {
    this.personas = [
      {
        dni: 123456789,
        nombre: "Juan Pérez",
        direccion: "Calle Principal 123",
        ciudad: "Medellín",
        tipoPersona: "Cliente",
        telefono: "555-123-456"
      },
      {
        dni: 987654321,
        nombre: "María González",
        direccion: "Avenida Central 456",
        ciudad: "Cali",
        tipoPersona: "Proveedor",
        telefono: "555-789-123"
      },
      {
        dni: 555555555,
        nombre: "Pedro Ramírez",
        direccion: "Carrera 7 No. 89-10",
        ciudad: "Cartagena",
        tipoPersona: "Empleado",
        telefono: "555-555-555"
      },



    ]
  }

}
