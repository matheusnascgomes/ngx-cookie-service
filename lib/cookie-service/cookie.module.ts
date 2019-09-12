import { NgModule, ModuleWithProviders } from '@angular/core';
import { COOKIE_CONFIG_TOKEN, defaultConfig } from './cookie.config';

@NgModule()
export class CookieModule {
  public static forRoot(config = defaultConfig): ModuleWithProviders {
    return {
      ngModule: CookieModule,
      providers: [
        {
          provide: COOKIE_CONFIG_TOKEN,
          useValue: { ...defaultConfig, ...config },
        },
      ],
    };
  }
}
