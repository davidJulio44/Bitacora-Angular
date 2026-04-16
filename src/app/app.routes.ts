import {Routes} from '@angular/router';

import { HomeComponent } from './ui/pages/home/home.component';
import {AboutComponent} from './ui/pages/about/about.component';

//Aqui se define que componente mostrar segun la URL
export const routes : Routes = [

    {
        path: '',
        component: HomeComponent

    },

    {
        path: 'about',
        component: AboutComponent

    },

    {
        path : '**',
        redirectTo: ''

    },

];