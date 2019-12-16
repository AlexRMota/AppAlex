import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';



@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  constructor(private cepService:CepService) { }

  ngOnInit() {
  }

  buscar(){
    this.cepService.buscar(this.cep.cep)
        .then((cep:Cep) => this.cep = cep)
        .catch(() => {
          this.cep = new Cep();
          alert ("Não foi possível fazer a busca. Por favor tente novamente.");
        })
      
  }

}

/*import { Component, OnInit } from '@angular/core';
import {CepService} from "../cep.service";
import {Cep} from "../cep";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  cep = new Cep();
  constructor( private cepService:CepService) { }

  ngOnInit() {
  }

  busca(){
    this.cepService.buscar(this.cep.cep)
        .then((cep:Cep) => this.cep = cep);
  }

}*/
