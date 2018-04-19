import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Database',
    icon: 'nb-tables',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Dashboard',
    icon: 'nb-bar-chart',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Area',
    icon: 'nb-location',
    link: '/pages/maps/gmaps',

  },
  // {
  //   title: 'UI Features',
  //   icon: 'nb-keypad',
  // },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  // },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  // },
  
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  // },
];
