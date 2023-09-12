import { Component, OnInit } from '@angular/core';
import { Involucrar } from 'src/app/models/teambea_involucrar';

@Component({
  selector: 'app-list-involucrar',
  templateUrl: './list-involucrar.component.html',
  styleUrls: ['./list-involucrar.component.css']
})
export class ListInvolucrarComponent implements OnInit {

  involucrados: Involucrar[] = [];

  ngOnInit(): void {
    this.llenarInvolucrar();
  }

  llenarInvolucrar() {
    this.involucrados = [
      {
        hora: "2022-09-11 14:30",
        matricula: "ABC-123",
        dni: 123456789
      },
      {
        hora: "2022-09-12 15:00",
        matricula: "XYZ-789",
        dni: 987654321
      },
      {
        hora: "2022-09-10 16:45",
        matricula: "LMN-456",
        dni: 555555555
      }
    ]
  }
}
