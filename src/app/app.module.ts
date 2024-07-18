import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WcsAngularModule } from 'wcs-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { WcsFormlyModule } from 'wcs-formly';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WcsAngularModule,
    ReactiveFormsModule,
    WcsFormlyModule,
    FormlyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
