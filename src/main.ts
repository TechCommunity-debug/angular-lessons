import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
    //step 1: provide HttpClient service.
  providers: [provideHttpClient()]
}).catch((err) => console.error(err));
