import { Routes } from '@angular/router';
import { Layout } from './layouts/layout/layout';
import { OrganizerDashboard } from './organizer-dashboard/organizer-dashboard';
import { EventSetup } from './eventsetup/eventsetup';
import { LiveAuction } from './live-auction/live-auction';
import { TeamOwnerDashboard } from './team-owner-dashboard/team-owner-dashboard';
import { PlayerRegistrationPortal } from './player-registration-portal/player-registration-portal';
import { RegisteredPlayers } from './registered-players/registered-players';
import { BidManagement } from './Bid-Mangement/bid-management/bid-management';
import { AdminDashboard } from './admin-dashboard/admin-dashboard/admin-dashboard';
import { Notification } from './notification/notification';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  {
    path: 'dashboard', component: Layout,
    children: [
      { path: '', component: OrganizerDashboard },
      { path: 'organizer-dashboard', component: OrganizerDashboard },
      { path: 'eventsetup', component: EventSetup },
      { path: 'live-auction', component: LiveAuction },
      { path: 'team-owner', component: TeamOwnerDashboard },
      { path: 'player-registration', component: PlayerRegistrationPortal },
      { path: 'registered-player', component: RegisteredPlayers },
      { path: 'bid-manage', component: BidManagement },
      { path: 'admin-dashboard', component: AdminDashboard },
      { path: 'notification', component: Notification },
    ],
  },
];
