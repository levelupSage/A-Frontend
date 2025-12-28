import { Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Layout } from './layouts/layout/layout';
import { EventSetup } from './eventsetup/eventsetup';
import { LiveAuction } from './live-auction/live-auction';
import { TeamOwnerDashboard } from './team-owner-dashboard/team-owner-dashboard';
import { PlayerRegistrationPortal } from './player-registration-portal/player-registration-portal';
import { RegisteredPlayers } from './registered-players/registered-players';
import { BidManagement } from './Bid-Mangement/bid-management/bid-management';
import { Notification } from './notification/notification';

export const ADMIN_ROUTES: Routes = [
  {
    path: '', component: Layout,
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'eventsetup', component: EventSetup },
      { path: 'live-auction', component: LiveAuction },
      { path: 'team-owner', component: TeamOwnerDashboard },
      { path: 'player-registration', component: PlayerRegistrationPortal },
      { path: 'registered-player', component: RegisteredPlayers },
      { path: 'bid-manage', component: BidManagement },
      { path: 'notification', component: Notification },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  },
];


