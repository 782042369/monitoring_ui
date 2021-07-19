/*
 * @Author: 杨宏旋
 * @Date: 2021-05-12 14:29:09
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-20 18:25:52
 * @Description: user
 */
import { defHttp } from '@/utils/axios'
import { LoginProp, UserInfoProp, UserListProp, AccountProp } from './model'

export function Login(params: LoginProp) {
  // 获取关联计划详情
  return defHttp.post<UserInfoProp>({
    url: '/api/auth/login',
    method: 'post',
    params,
  })
}
export function GetCookie() {
  // 获取关联计划详情
  return defHttp.post<AccountProp>({
    url: '/api/account/page',
    method: 'post',
  })
}
export function LoginOut() {
  // 获取关联计划详情
  return defHttp.post({
    url: '/api/auth/logout',
    method: 'post',
  })
}
export function GetUserList(params: {
  limit?: number
  offset?: number
  order?: string
  page?: number
  pageCondition?: {
    groupOp: string
    rules: {
      data: any
      field: string
      op: string
    }[]
  }
  sidx?: string
}) {
  // 获取关联计划详情
  return defHttp.post<UserListProp>({
    url: '/api/user/page',
    method: 'post',
    params,
  })
}
