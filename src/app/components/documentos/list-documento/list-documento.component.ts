import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/teambea_documentos';

@Component({
  selector: 'app-list-documento',
  templateUrl: './list-documento.component.html',
  styleUrls: ['./list-documento.component.css']
})
export class ListDocumentoComponent implements OnInit {
  documentos: Documento[] = [];

  ngOnInit(): void {
    this.llenarDocumento();
  }
  // dni: 123456789,
  // tarjetaPropiedad: "ABC-123",
  // ciudadExp: "Bogotá",
  // matricula: "XYZ-789"
  // dni: 987654321,
  // tarjetaPropiedad: "DEF-456",
  // ciudadExp: "Medellín",
  // matricula: "LMN-123"
  // dni: 555555555,
  // tarjetaPropiedad: "GHI-789",
  // ciudadExp: "Cali",
  // matricula: "OPQ-456"


  llenarDocumento() {
    this.documentos = [
      {
        dni: 123456789,
        tarjetaPropiedad: "ABC-123",
        ciudadExpedicion: "Bogotá",
        matricula: "XYZ-789"
      },
      {
        dni: 987654321,
        tarjetaPropiedad: "DEF-456",
        ciudadExpedicion: "Medellín",
        matricula: "LMN-123"
      },
      {
        dni: 555555555,
        tarjetaPropiedad: "GHI-789",
        ciudadExpedicion: "Cali",
        matricula: "OPQ-456"
      }
    ]
  }

}
