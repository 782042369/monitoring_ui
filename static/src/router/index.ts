/*
 * @Author: 杨宏旋
 * @Date: 2021-05-07 14:09:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-23 15:04:19
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
  {
    path: '/',
    redirect: '/web/home'
  },
  {
    path: '/web',
    component: Layout,
    redirect: '/web/home',
    children: [
      {
        path: 'home',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '数据分析'
      },

      {
        path: 'top',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: 'TOP分析'
      },
      {
        path: 'pagesavg',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '访问页面'
      },
      {
        path: 'ajaxavg',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: 'AJAX性能'
      },
      {
        path: 'erroravg',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '脚本错误'
      },
      {
        path: 'pagesavg',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '慢页面追踪'
      },
      {
        path: 'resourcesavg',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '慢资源追踪'
      },
      {
        path: 'analysislist',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '用户轨迹'
      },
      {
        path: 'diagram',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '流量热力图'
      },
      {
        path: 'alarm',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '应用告警'
      },
      {
        path: 'setting',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '数据分析'
      },
      {
        path: 'home',
        component: () => import(`@/views/Home/index.vue`),
        name: 'home',
        title: '系统设置'
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
