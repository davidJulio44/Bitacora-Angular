import { ApplicationConfig } from '@angular/core';

//importa la funcion que habilita el routing
import {provideRouter} from '@angular/router';

//importa las rutas definidas en app.routes.ts
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [

    //Activa el sistema de rutas con la configuración definida en app.routes.ts
    provideRouter(routes)
  ]
};
