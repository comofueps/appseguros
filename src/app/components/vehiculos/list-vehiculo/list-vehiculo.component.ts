import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/teambea_vehiculos';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.css']
})
export class ListVehiculoComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

  ngOnInit(): void {
    this.llenarVehiculo();
  }

  llenarVehiculo() {

    this.vehiculos = [
      {
        matricula: "ABC-123",
        marca: "Toyota",
        modelo: "Corolla"


      },
      {
        matricula: "XYZ-789",
        marca: "Honda",
        modelo: "Civic"
      },
      {
        matricula: "LMN-456",
        marca: "Ford",
        modelo: "Focus"

      }

    ]

  }

}
