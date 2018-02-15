import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pages/pageIndex'
import pageWorks from '@/components/pages/pageWorks'
import pageAbout from '@/components/pages/pageAbout'
import pageProject from '@/components/pages/pageProject'
import pageProduct from '@/components/pages/pageProduct'
import pageProjectEdit from '@/components/pages/pageProjectEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageIndex
    }, {
      path: '/works',
      name: 'works',
      component: pageWorks
    }, {
      path: '/about',
      name: 'about',
      component: pageAbout
    }, {
      path: '/product',
      name: 'product',
      component: pageProduct
    }, {
      path: '/manage',
      name: 'project_edit',
      component: pageProjectEdit
    }, {
      path: '/project/:id',
      name: 'project',
      component: pageProject
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })

  }
})
