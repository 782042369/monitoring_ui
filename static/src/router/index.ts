/*
 * @Author: 杨宏旋
 * @Date: 2021-05-07 14:09:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 13:49:57
 * @Description: 路由配置文件
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import(`@/views/Login/index.vue`),
    name: 'login',
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
