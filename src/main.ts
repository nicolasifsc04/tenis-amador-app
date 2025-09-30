import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from './environments/environment';
import { routes } from './app/app.routes'; // Suas rotas principais
import { AppComponent } from './app/app.component'; // Seu componente raiz
import { AuthInterceptor } from './app/interceptors/auth-interceptor';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // <--- SOLUÇÃO: Adicione a funcionalidade de cliente HTTP
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
});

