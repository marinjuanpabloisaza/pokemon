import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardPageComponent } from './pages/card-page/card-page.component';

export const routes: Routes = [
    {path: '', 
     redirectTo: '/pokemon',
     pathMatch: 'full'
    },
    {
        path: '',
        component: SidebarComponent,
        children: [
            {
                path: 'pokemon/:id',
                component: CardPageComponent
            }, 
            {
                path: 'pokemon',
                component: HomeComponent,
            }, 
            {
                path: 'test',
                component: HomeComponent
            }, 
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    
];
