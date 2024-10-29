import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenLoaderService {

  private _isLoading = signal(false);

  public get isLoading(): boolean {
    return this._isLoading();
  }

  public setIsLoading(isLoading: boolean): void {
    this._isLoading.set(isLoading);
  }

}
