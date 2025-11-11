import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // (Sau này thêm: meta: { requiresAuth: true })
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: () => import('../views/ProfileView.vue'),
    // },
    // {
    //   path: '/workouts',
    //   name: 'workouts',
    //   component: () => import('../views/WorkoutHistoryView.vue'),
    // },
    // {
    //   path: '/workouts/log',
    //   name: 'log-workout',
    //   component: () => import('../views/LogWorkoutView.vue'),
    // },
    // {
    //   path: '/nutrition',
    //   name: 'nutrition',
    //   component: () => import('../views/NutritionView.vue'),
    // },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
