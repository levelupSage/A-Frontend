import { Routes } from '@angular/router';
import { Layout } from './layouts/layout/layout';
import { OrganizerDashboard } from './organizer-dashboard/organizer-dashboard';
import { EventSetup } from './eventsetup/eventsetup';
import { LiveAuction } from './live-auction/live-auction';

export const routes: Routes = [
  {
    path: '', component: Layout,
    children: [
      { path: '', component: OrganizerDashboard },
      { path: 'organizer-dashboard', component: OrganizerDashboard },
      { path: 'eventsetup', component: EventSetup },
      { path: 'live-auction', component: LiveAuction },
    ],
  },
];
