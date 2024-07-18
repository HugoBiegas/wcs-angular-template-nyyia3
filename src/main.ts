import './polyfills';

import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { applyPolyfills, defineCustomElements } from 'wcs-core/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
