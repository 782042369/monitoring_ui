/*
 * @Author: yanghongxuan
 * @Date: 2021-12-27 14:46:23
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-31 14:14:59
 * @Description:
 */
import { defHttp } from '@/utils/axios'
import {
  DaysdatauvpvProps,
  WebPvUvIpSituationProps,
  WebListProps,
  WebListType,
  WebListHistoryProps
} from './model'

export function getWebPvUvIpByDay(params) {
  // 获取某日概况
  return defHttp.get<DaysdatauvpvProps>({
    url: '/api/getWebPvUvIpByDay',
    params
  })
}
export function getWebPvUvIpSituation(params) {
  // 获取系统定时任务时间
  return defHttp.get<WebPvUvIpSituationProps>({
    url: '/api/getWebPvUvIpSituation',
    params
  })
}
export function getPvUvIpList(params) {
  // 获取图表数据
  return defHttp.get<WebListProps>({
    url: '/api/getPvUvIpList',
    params
  })
}
export function getPvUvIpOne(params) {
  // 获取单条图表
  return defHttp.get<{
    data: WebListType
    time: number
  }>({
    url: '/api/getPvUvIpOne',
    params
  })
}
export function getHistoryPvUvIplist(params) {
  // 获取历史概况
  return defHttp.get<WebListHistoryProps>({
    url: '/api/getHistoryPvUvIplist',
    params
  })
}
