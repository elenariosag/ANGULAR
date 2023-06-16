import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //si no empieza por punto es una libreria

import { AppModule } from './app/app.module'; //si empieza por punto es local


platformBrowserDynamic().bootstrapModule(AppModule) //arranca
  .catch(err => console.error(err)); //sale por consola (console del f12 del navegador)
                                      //producto para generar y analizar los errores :SENTRY (https://sentry.io/welcome/) 
                                      //lo manda por post a una URL
                                      

