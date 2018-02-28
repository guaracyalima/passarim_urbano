import { Http } from '@angular/http'

import { Ofertas } from "./models/Oferta.model";
import { Injectable } from '@angular/core';

import 'rxjs/operator/toPromise'

@Injectable()
export class OfertasService {

  constructor(private http: Http) { }


  public getOfertas(): Promise<Ofertas[]> {
    return this.http.get('http://localhost:3000/ofertas/?destaque=true')
                    .toPromise()
                    .then((resposta: any) => resposta.json())
  }

  public getOfertasPorCategoria(categoria: string): Promise<Ofertas[]> {
    return this.http.get(`http://localhost:3000/ofertas/?categoria=${categoria}`)
              .toPromise()
              .then( (resposta: any) => resposta.json())
  }

}