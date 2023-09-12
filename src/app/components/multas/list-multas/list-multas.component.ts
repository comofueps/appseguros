import { Component, OnInit } from '@angular/core';
import { Multa } from 'src/app/models/teambea_multas';


@Component({
  selector: 'app-list-multas',
  templateUrl: './list-multas.component.html',
  styleUrls: ['./list-multas.component.css']
})
export class ListMultasComponent implements OnInit {

  multas: Multa[] = [];

  ngOnInit(): void {
    this.llenarMultas();
  }

  llenarMultas() {
    this.multas = [
      {
        dni: 123456789,
        consecutivoMultas: "ABC123",
        fechayhora: "2023-09-11 14:30",
        lugarInfraccion: "Medellín, Calle Principal"
      },
      {
        dni: 987654321,
        consecutivoMultas: "XYZ789",
        fechayhora: "2023-09-12 09:15",
        lugarInfraccion: "Bogotá, Avenida Central"
      },
      {
        dni: 555555555,
        consecutivoMultas: "LMN456",
        fechayhora: "2023-09-10 16:45",
        lugarInfraccion: "Cali, Carrera 7"
      }
    ]
  }

}
