import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        { path: '/teams/:teamId', component: TeamMembers, props: true },
      ],
    },
    {
      path: '/users',
      // component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    },
    { path: '/:notFound(.*)*', component: NotFound },
    // { path: '/teams', component: TeamsList, alias: '/'},
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    console.log(to, from, savedPosition);
    return { left: 0, right: 0 };
  },
});

export default router;