import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pages/pageIndex'
import pageProjectList from '@/components/pages/pageProjectList'
import pageAbout from '@/components/pages/pageAbout'
import pageProject from '@/components/pages/pageProject'
import pageProduct from '@/components/pages/pageProduct'
import pageProductApp from '@/components/pages/pageProductApp'
import pageProductCard from '@/components/pages/pageProductCard'
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
      path: '/project',
      name: 'project',
      component: pageProjectList
    }, {
      path: '/about',
      name: 'about',
      component: pageAbout
    }, {
      path: '/product',
      name: 'product',
      component: pageProduct
    }, {
      path: '/product/app',
      name: 'productApp',
      component: pageProductApp
    }, {
      path: '/product/card',
      name: 'productCard',
      component: pageProductCard
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
