import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas = {
    "realizadas" : [
    { "especialidade" : "Cardiologia", "quantidade" : 20},
    { "especialidade" : "Clínica Geral", "quantidade" : 30},
    { "especialidade" : "Dermatologia", "quantidade" : 14},
    { "especialidade" : "Gastroenterologia", "quantidade" : 10},
    { "especialidade" : "Pediatria", "quantidade" : 13},

  ],

  "marcadas" : [
    { "especialidade" : "Cardiologia", "quantidade" : 20},
    { "especialidade" : "Clínica Geral", "quantidade" : 30},
    { "especialidade" : "Dermatologia", "quantidade" : 14},
    { "especialidade" : "Gastroenterologia", "quantidade" : 10},
    { "especialidade" : "Pediatria", "quantidade" : 13},

  ]

}

  constructor() { }

  ngOnInit() {
  }

}
