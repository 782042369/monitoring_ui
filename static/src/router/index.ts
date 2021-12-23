/*
 * @Author: 杨宏旋
 * @Date: 2021-05-07 14:09:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-23 13:57:30
 * @Description: 路由配置文件
 */
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/login',
    component: () => import(`@/views/Login/index.vue`),
    name: 'login'
  },
  // {
  //   path: '/',
  //   redirect: '/web/home'
  // },
  {
    path: '/web',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import(`@/views/Home/index.vue`)
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
