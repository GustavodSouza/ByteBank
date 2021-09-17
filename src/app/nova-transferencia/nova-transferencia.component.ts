import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() public aoTransferir = new EventEmitter<any>();

  public valor!: number;
  public destino!: string;

  public constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
  ) {}

  public transferir(): void {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};

    this.transferenciaService.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    (error) => {
      console.error('Ocorreu um erro!', error);
    });
  }
}
