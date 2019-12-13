import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cep } from "./cep";

@Injectable({
  providedIn: "root"
})
export class CepService {
  resultado:Cep;
  constructor(private http:HttpClient) {}

    buscar(cep:string){
      return this.http
          .get(`https://viacep.com.br/ws/${cep}/json/`)
          .subscribe(data => this.resultado = this.converterRespostaParaCep(data));          
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