import { Component, inject } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { ScreenLoaderService } from './shared/services/screen-loader.service';
import { ScreenLoaderComponent } from './shared/components/screen-loader/screen-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenLoaderComponent],
  template: `
    <div>
      @if(screenLoaderService.isLoading) {
        <app-screen-loader />
      }
      <router-outlet />
    </div>
  `,
})
export class AppComponent {

  public screenLoaderService = inject(ScreenLoaderService);

  private _router = inject(Router);

  constructor() {
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.screenLoaderService.setIsLoading(true);
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.screenLoaderService.setIsLoading(false);
        }, 1000)
      }
    });
  }

}
