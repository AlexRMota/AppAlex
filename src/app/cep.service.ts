import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cep } from "./cep";

//import { toPromise } from "rxjs/Operator";
//import "rxjs/add/operator/toPromise";

@Injectable()
export class CepService {
  resultado:Cep;
  constructor(private http:HttpClient) {}

    buscar(cep:string){
      return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
          .toPromise()          
          //.then(response => {
          //  console.log(response);
          //})
          //.then(response => this.converterRespostaParaCep(response.json())); 
          //.subscribe(data => this.resultado = this.converterRespostaParaCep(data));
          .then(data => this.resultado = this.converterRespostaParaCep(data));         
    }

    private converterRespostaParaCep(cepNaResposta):Cep{
        console.log(cepNaResposta);
        let cep = new Cep();

        cep.cep = cepNaResposta.cep;
        cep.logradouro = cepNaResposta.logradouro;
        cep.complemento = cepNaResposta.complemento;
        cep.bairro = cepNaResposta.bairro;
        cep.cidade = cepNaResposta.localidade;
        cep.uf = cepNaResposta.uf;
        return cep;
    }

}