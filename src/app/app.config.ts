import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideRouter } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { routes } from './app.routes';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, '../assets/i18n/', '.json');





export const appConfig: ApplicationConfig = {
  providers: [
   
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({ 
      loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
     })
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideHttpClient(),
    // importProvidersFrom([TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: httpLoaderFactory,
    //     deps: [HttpClient],
    //   },
    // })])
  ],
    
};
