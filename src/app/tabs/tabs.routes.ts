import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'community',
        loadComponent: () =>
          import('../community/community.page').then((m) => m.CommunityPage),
      },
      {
        path: 'add-book',
        loadComponent: () =>
          import('../add-book/add-book.page').then((m) => m.AddBookPage),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('../chat/chat.page').then((m) => m.ChatPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
