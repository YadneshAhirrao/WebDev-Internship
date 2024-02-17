import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from '../pages/AllUser.vue';
import CourseGoals from '../pages/CourceGoals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: AllUsers },
      { path: '/goals', component: CourseGoals }
    ]
  });

export default router;