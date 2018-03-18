import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServiceWorkerModule } from '@angular/service-worker'
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  if ('serviceWorker' in navigator) {
    ServiceWorkerModule.register('/ngsw-worker.js');
  }
  
})
  .catch(err => console.log(err));
