import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-screen-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <span class="container__loader"></span>
      <span class="container__text">Carregando...</span>
    </div>
  `,
  styleUrl: './screen-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenLoaderComponent { }
