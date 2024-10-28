import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div>
      <h1 style="color: purple">Pedidos</h1>
      <button type="button" (click)="goToCart()">Meu carrinho</button>
    </div>
  `,
  styleUrl: './order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  private readonly _router = inject(Router);

  public goToCart(): void {
    this._router.navigate(['/carrinho']);
  }
 }
