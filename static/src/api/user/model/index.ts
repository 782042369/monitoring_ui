/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 16:07:39
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-24 15:42:11
 * @Description:
 */
export interface LoginProp {
  password: string
  username: string
}
export interface UserProp {
  id: number
  nickname: string
  role: string
  token: string
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
export interface UserInfoProp {
  data: UserProp
  code: number
}
export interface UserListProp {
  data: {
    records: UserProp[]
    totalSize: number
    countId: number
    current: number
    hitCount: boolean
    maxLimit: string
    optimizeCountSql: boolean
    orders: string[]
    pages: number
    searchCount: boolean
    size: number
    total: number
  }
}
export interface AccountProp {
  data: {
    records: {
      id: number
      deptId: null
      createBy: number
      updateBy: null
      createDate: string
      updateDate: string
      delFlag: number
      remarks: number
      userId: number
      username: string
      cookie: string
      newRecord: boolean
    }[]
  }
}
