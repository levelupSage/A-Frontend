import { Routes } from '@angular/router';
import { Home } from './public/home/home';
import { Login } from './public/login/login';
import { Layout } from './public/layout/layout';

export const routes: Routes = [
{
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'login', component: Login }
    ]
  }
  // {
  //   path: 'dashboard', component: Layout,
  //   children: [
  //     { path: '', component: OrganizerDashboard },
  //     { path: 'organizer-dashboard', component: OrganizerDashboard },
  //     { path: 'eventsetup', component: EventSetup },
  //     { path: 'live-auction', component: LiveAuction },
  //     { path: 'team-owner', component: TeamOwnerDashboard },
  //     { path: 'player-registration', component: PlayerRegistrationPortal },
  //     { path: 'registered-player', component: RegisteredPlayers },
  //     { path: 'bid-manage', component: BidManagement },
  //     { path: 'admin-dashboard', component: AdminDashboard },
  //     { path: 'notification', component: Notification },
  //   ],
  // },
];
