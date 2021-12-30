/*
 * @Author: yanghongxuan
 * @Date: 2021-12-28 09:43:17
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-29 18:08:55
 * @Description:
 */
export interface DaysdatauvpvProps {
  pv: number
  uv: number
  ip: number
  ajax: number
  flow: string
}
export interface WebPvUvIpSituationProps {
  data: null
  time: number
}
export type WebListType = {
  time: string
  pv: number
  uv: number
  ip: number
  ajax: number
  flow: number
}
export interface WebListProps {
  data: WebListType[]
  time: number
}