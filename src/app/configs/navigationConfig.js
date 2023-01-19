import i18next from 'i18next';
import en from './navigation-i18n/en';

i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    subtitle: 'Dashboard Insight RPA',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.project',
        title: 'Project',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
        url: '/dashboards/project',
      },
    ],
  },
];

export default navigationConfig;
