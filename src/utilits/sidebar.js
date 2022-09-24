import Generic from '../components/Generic';
import { ReactComponent as dashboard } from '../assets/icons/dashboard.svg';
import { ReactComponent as students } from '../assets/icons/students.svg';
import { ReactComponent as leaders } from '../assets/icons/leaders.svg';
import { ReactComponent as groups } from '../assets/icons/groups.svg';
import { ReactComponent as homeworks } from '../assets/icons/homeworks.svg';
import { ReactComponent as calendar } from '../assets/icons/calendar.svg';
import { ReactComponent as balance } from '../assets/icons/balance.svg';
import { ReactComponent as sections } from '../assets/icons/sections.svg';
import { ReactComponent as settings } from '../assets/icons/settings.svg';
import Students from '../components/Students';

export const data = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    Icon: dashboard,
    Component: Generic,
  },
  {
    id: 2,
    title: "O'quvchilar",
    path: '/students',
    Icon: students,
    Component: Students,
  },
  {
    id: 3,
    title: 'Lidlar',
    path: '/leaders',
    Icon: leaders,
    Component: Generic,
  },
  {
    id: 4,
    title: 'Guruhlar',
    path: '/groups',
    Icon: groups,
    Component: Generic,
  },
  {
    id: 5,
    title: 'Vazifalar',
    path: '/homeworks',
    Icon: homeworks,
    Component: Generic,
  },
  {
    id: 6,
    title: 'Calendar',
    path: '/calendar',
    Icon: calendar,
    Component: Generic,
  },
  {
    id: 7,
    title: 'Moliya',
    path: '/balance',
    Icon: balance,
    Component: Generic,
  },
  {
    id: 8,
    title: 'Bo‘limlar',
    path: '/sections',
    Icon: sections,
    Component: Generic,
  },
  {
    id: 9,
    title: 'Sozlamar',
    path: '/settings',
    Icon: settings,
    Component: Generic,
  },
];
