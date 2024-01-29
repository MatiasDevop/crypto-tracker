// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideAnimations } from '@angular/platform-browser/animations';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideAnimations()
//   ]
// })
//   .catch((err) => console.error(err));

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
