/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 14:50:45
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-21 17:22:52
 * @Description:
 */
import { getStore, setStore } from '../storage'

export function getToken() {
  return getStore({
    name: 'token',
    type: 'local',
  })
}
export function setToken(content: string) {
  return setStore({
    name: 'token',
    type: 'local',
    content,
  })
}
export function getUserInfo() {
  return getStore({
    name: 'UserInfo',
    type: 'local',
  })
}
export function setUserInfo(content: any) {
  return setStore({
    name: 'UserInfo',
    type: 'local',
    content,
  })
}
export function setUserCookie(content: string) {
  content.split(';').forEach((ele) => {
    document.cookie = ele
  })
}
