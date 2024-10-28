import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1 style="color: red">Carrinho</h1>
      <button type="button" (click)="goToOrders()">Meus pedidos</button>
    </div>
  `,
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  
  private readonly _router = inject(Router);

  public goToOrders(): void {
    this._router.navigate(['/pedidos']);
  }
}
