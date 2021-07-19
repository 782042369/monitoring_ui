/*
 * @Author: 杨宏旋
 * @Date: 2021-05-17 11:08:32
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-28 10:07:36
 * @Description: 路由鉴权
 */
import { getToken } from '@/utils/auth'
import router from './index'
import { PageEnum } from '@/enums/pageEnum'
const LOGIN_PATH = PageEnum.BASE_LOGIN

// const whitePathList: PageEnum[] = [LOGIN_PATH];

export default function createPermissionGuard() {
  // const permissionStore = usePermissionStoreWidthOut();
  router.beforeEach(async (to, from, next) => {
    const token = getToken()
    // 没有登陆信息 跳转到 login
    if (!token) {
      if (to.path !== LOGIN_PATH) {
        next(LOGIN_PATH)
      }
      if (to.path === LOGIN_PATH) {
        next()
      }
    } else {
      if (to.path === LOGIN_PATH && from.path === '/') {
        next(PageEnum.BASE_HOME)
      }
      next()
    }
  })
}
