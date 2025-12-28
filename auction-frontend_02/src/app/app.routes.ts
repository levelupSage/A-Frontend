import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Login } from './components/login/login';
import { roleGuard } from './core/auth/role-guard';
import { Role } from './core/auth/roles';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'login', component: Login },

  { path: 'admin', canActivate: [roleGuard],
    data: { roles: [Role.ADMIN] },
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  { path: 'user', canActivate: [roleGuard],
    data: { roles: [Role.USER] },
    loadChildren: () => import('./user/user.routes').then(m => m.USER_ROUTES)
  },
  
  { path: '**', redirectTo: '' }
];
