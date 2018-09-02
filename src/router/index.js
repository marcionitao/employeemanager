import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import NewEmployee from '@/components/NewEmployee';
import ViewEmployee from '@/components/ViewEmployee';
import EditEmployee from '@/components/EditEmployee';
import Login from '@/components/Login';
import Register from '@/components/Register';

import firebase from 'firebase';

Vue.use(Router);

const router = new Router({

  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },

    { path: '*',
      redirect: '/dashboard',
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true,
      },
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true,
      },
    },

    {
      path: '/employee/new',
      name: 'new-employee',
      component: NewEmployee,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/employee/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: '/employee/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// NAV GUARDS

router.beforeEach((to, from, next) => {
  // check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check if not logged in
    if (!firebase.auth().currentUser) {
      // go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // check if  logged in
    if (firebase.auth().currentUser) {
      // go to login
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // proceed to route
      next();
    }
  } else {
    // proceed to route
    next();
  }
});

export default router;
