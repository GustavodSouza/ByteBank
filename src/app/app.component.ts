import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  public transferencias: any[] = [];

  public transferir($evento: any): void {
    const transferencia = { ...$evento, data: new Date() };
    this.transferencias.push(transferencia);
  }
}
