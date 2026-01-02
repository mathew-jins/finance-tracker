import { Routes } from '@angular/router';   

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: ()=> import('./home/home').then(m=> m.Home)
    },
    {
        path: 'transactions',
        loadComponent: ()=> import('./transactions/transactions').then(m=> m.Transactions)
    }
];
