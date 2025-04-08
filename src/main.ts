import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { HeroComponent } from './app/components/hero/hero.component';
import { CartaComponent } from './app/components/carta/carta.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'carta', component: CartaComponent }

];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
