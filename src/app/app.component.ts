import { afterNextRender, Component, inject } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app">
      <router-outlet />
    </div>
  `,
  styles: `
    .app {
      margin: 1rem;
    }
  `,
})
export class AppComponent {}
