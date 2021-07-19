/*
 * @Author: 杨宏旋
 * @Date: 2021-05-12 14:24:28
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-17 11:26:52
 * @Description:
 */
/*
 * @Author: 杨宏旋
 * @Date: 2019-09-23 10:17:34
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2020-09-04 11:58:00
 * @Description:
 */
/**
 * 获取localStorage
 */
interface ParamsType {
  type: 'session' | 'local'
  name: string
  content?: any
}
function Judge(strname: string) {
  const str = strname.substr(0, 1)
  if (str === '*') {
    return false
  }
}
export const getStore = (params: ParamsType) => {
  const { name } = params
  const strname = window.btoa(name)
  let arr: any = ''
  if (Judge(name)) {
    arr = window.sessionStorage.getItem(strname)
  } else {
    arr = window.localStorage.getItem(strname)
  }
  if (arr) {
    return JSON.parse(arr)
  } else {
    return false
  }
}
/**
 * 删除Storage
 */
export const removeStore = (params: ParamsType) => {
  const { name } = params
  const strname = window.btoa(name)
  if (Judge(strname)) {
    window.sessionStorage.removeItem(strname)
  } else {
    window.localStorage.removeItem(strname)
  }
}
/**
 * 清理Storage
 */
export const clearStore = (params: ParamsType) => {
  const { name } = params
  if (Judge(name)) {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}
/**
 * 存储Storage
 */
export const setStore = (params: ParamsType) => {
  const { name, content } = params
  const strname = window.btoa(name)
  if (Judge(name)) {
    window.sessionStorage.setItem(strname, JSON.stringify(content))
  } else {
    window.localStorage.setItem(strname, JSON.stringify(content))
  }
}
