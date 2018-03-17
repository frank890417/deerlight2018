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
import pageContact from '@/components/pages/pageContact'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: pageIndex
  }, {
    path: '/project',
    name: 'projectList',
    component: pageProjectList
  }, {
    path: '/about',
    name: 'about',
    component: pageAbout
  }, {
    path: '/product',
    name: 'productList',
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
    component: pageProject,
    meta: {
      noPaddingTop: true
    }
  }, {
    path: '/contact',
    name: 'contact',
    component: pageContact
  }
]

const router = new Router({
  mode: 'history',
  routes,
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


import preloader from 'monoame-preloader'
import soft_scroll from 'monoame-softscroll'
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path.indexOf("/manage") == 0) {
    soft_scroll.set(false)
  } else {
    soft_scroll.set(true)
  }

  next()
})

export default router