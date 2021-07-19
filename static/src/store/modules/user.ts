/*
 * @Author: 杨宏旋
 * @Date: 2021-05-17 11:36:33
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-24 15:43:39
 * @Description:
 */
import { defineStore } from 'pinia'
import { store } from '@/store'
import router from '@/router'
import { PageEnum } from '@/enums/pageEnum'
import { LoginProp } from '@/api/user/model'
import { Login, GetCookie } from '@/api/user'
import {
  setUserInfo,
  setToken,
  getToken,
  getUserInfo,
  setUserCookie,
} from '@/utils/auth'
import { message } from 'ant-design-vue'

interface UserInfo {
  id: number
  nickname: string
  role: string
  username: string
  createBy: string
  createDate: string
  delFlag: string
  deptId: string
  remarks: string
  updateBy: string
  updateDate: string
  userId: number
}
interface UserState {
  userInfo: Nullable<UserInfo>
  token?: string
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: getUserInfo() || {},
    // token
    token: getToken() || '',
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo as UserInfo
    },
    getToken(): string {
      return this.token as string
    },
  },
  actions: {
    setToken(info: string) {
      this.token = info
      setToken(info)
    },
    setUserInfo(info: UserInfo) {
      this.userInfo = info
      setUserInfo(info)
    },
    resetStateToken() {
      this.token = ''
      setToken('')
      router.push(PageEnum.BASE_LOGIN)
    },
    async login(params: LoginProp): Promise<UserInfo | null> {
      try {
        const { data, code } = await Login(params)
        if (code === 401) {
          message.warning({
            content: '登陆失败',
          })
          return null
        } else {
          const { token, ...userInfo } = data
          this.setToken(token)
          this.setUserInfo(userInfo)
          const { data: Cookie } = await GetCookie()
          setUserCookie(Cookie.records[0].cookie)
          router.push(PageEnum.BASE_HOME)
          message.success({
            content: '登陆成功',
          })
          return userInfo
        }
      } catch (error) {
        console.error('login error: ', error)
        return null
      }
    },
    logout() {
      this.setToken('')
      router.push(PageEnum.BASE_LOGIN)
    },
  },
})

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store)
}
