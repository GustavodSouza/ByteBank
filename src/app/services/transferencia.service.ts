import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  public listaTransferencias: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(
    private httpClient: HttpClient,
  ) {
    this.listaTransferencias = [];
  }

  get transferencias(): any {
    return this.listaTransferencias;
  }

  public adicionar(transferencia: Transferencia): Observable<Transferencia> {

    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }

  public todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }
}
