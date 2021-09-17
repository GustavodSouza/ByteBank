import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() public aoTransferir = new EventEmitter<any>();

  public valor!: number;
  public destino!: number;

  public constructor() {}

  public transferir(): void {
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino});

    this.limparCampos();
  }

  public limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
