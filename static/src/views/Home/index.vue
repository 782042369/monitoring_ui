<!--
 * @Author: yanghongxuan
 * @Date: 2021-12-23 10:57:40
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-31 15:08:58
 * @Description:
-->
<template>
  <div class="com_content_body main" id="vue_id" v-cloak>
    <h1 class="com_h1">数据分析</h1>
    <div class="com_slide_tab_x mt30 mb30">
      <div class="item" :class="{ 'active': STATE.lable == 1 }" @click="checkoutLabel(1)">概况</div>
      <div
        class="item"
        :class="{ 'active': STATE.lable == 2 }"
        @click="checkoutLabel(2)"
      >PV | 请求 | UV | IP | FLOW</div>
    </div>
    <div v-show="STATE.lable == 1">
      <div class="com_topic mb20">
        <span class="iconfont">&#xe63a;</span>
        实时概况处理同步有{{ STATE.timebetween }}分钟以内的延迟，每{{ STATE.timebetween }}分钟自动更新一次。流量统计以（M）为单位。
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">查询某日概况</h1>
        <div class="search mb20">
          <input id="zane-calendar-1" class="inp" type="text" placeholder="点击选择日期" />
        </div>
        <div class="survey" v-if="STATE.surveyone.app_id">
          <div class="com pv">
            <span>PV:</span>
            {{ STATE.surveyone.pv }}
          </div>
          <div class="com uv">
            <span>UV:</span>
            {{ STATE.surveyone.uv }}
          </div>
          <div class="com ip">
            <span>IP:</span>
            {{ STATE.surveyone.ip }}
          </div>
          <div class="com ip">
            <span>请求:</span>
            {{ STATE.surveyone.ajax }}
          </div>
          <div class="com ip">
            <span>跳出率:</span>
            {{ STATE.surveyone.bounce || '0%' }}
          </div>
          <div class="com ip">
            <span>访问深度:</span>
            {{ STATE.surveyone.depth }}
          </div>
          <div class="com ip">
            <span>流量:</span>
            {{ STATE.surveyone.flow }}
          </div>
        </div>
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">今日概况</h1>
        <div class="survey">
          <div class="com pv">
            <span>PV:</span>
            {{ STATE.today.pv }}
          </div>
          <div class="com uv">
            <span>UV:</span>
            {{ STATE.today.uv }}
          </div>
          <div class="com ip">
            <span>IP:</span>
            {{ STATE.today.ip }}
          </div>
          <div class="com ip">
            <span>请求:</span>
            {{ STATE.today.ajax }}
          </div>
          <div class="com ip">
            <span>流量:</span>
            {{ STATE.today.flow }}
          </div>
        </div>
      </div>
      <div v-if="STATE.historylist.length">
        <div class="com_block mt20" v-for="(item,index) in STATE.historylist" :key="index">
          <h1 class="com_h2 mb20">{{ dayjs(item.created_time).format('YYYY-MM-DD') }}</h1>
          <div class="survey">
            <div class="com pv">
              <span>PV:</span>
              {{ item.pv }}
            </div>
            <div class="com uv">
              <span>UV:</span>
              {{ item.uv }}
            </div>
            <div class="com ip">
              <span>IP:</span>
              {{ item.ip }}
            </div>
            <div class="com ip">
              <span>请求:</span>
              {{ item.ajax }}
            </div>
            <div class="com ip">
              <span>跳出率:</span>
              {{ item.bounce || '0%' }}
            </div>
            <div class="com ip">
              <span>访问深度:</span>
              {{ item.depth }}
            </div>
            <div class="com ip">
              <span>流量:</span>
              {{ converUnit(item.flow) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="STATE.lable == 2">
      <div class="com_topic mb20">
        <span class="iconfont">&#xe63a;</span>
        实时数据处理同步有{{ STATE.timebetween }}分钟以内的延迟，实时统计每{{ STATE.timebetween }}分钟自动更新一次。流量统计以（M）为单位。
      </div>
      <div class="search search_1 mb20">
        <input
          id="zane-calendar-2"
          class="inp"
          type="text"
          :placeholder="'时间粒度选择' + STATE.searchbetween + '小时以内'"
        />
        <div class="tipscolor mt10" v-if="STATE.errText">{{ STATE.errText }}</div>
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">实时访问请求</h1>
        <div id="pvuvip_ajax" style="height:400px"></div>
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">实时访问PV</h1>
        <div id="pvuvip_pv" style="height:400px"></div>
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">实时访问UV</h1>
        <div id="pvuvip_uv" style="height:400px"></div>
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">实时访问IP</h1>
        <div id="pvuvip_ip" style="height:400px"></div>
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">实时流量统计</h1>
        <div id="pvuvip_flow" style="height:400px"></div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { getWebPvUvIpByDay, getWebPvUvIpSituation, getPvUvIpList, getPvUvIpOne, getHistoryPvUvIplist } from '@/api/uvpv'
import { onMounted, reactive, nextTick } from 'vue'
import dayjs from 'dayjs'
import * as echarts from 'echarts'
import type { DaysdatauvpvProps, WebListHistoryProps } from '@/api/uvpv/model'
import { converUnit } from '@/utils'

const STATE = reactive<{
  lable: number;
  beginTime: string;
  endTime: string;
  appId: string;
  datalist: never[];
  today: DaysdatauvpvProps;
  surveyone: {
    app_id?: string
    pv: number
    uv: number
    ip: number
    ajax: number
    flow: string
    bounce: string
    depth: number
  };
  errText: string;
  errTextleft: string;
  historylist: WebListHistoryProps;
  timebetween: number;
  searchbetween: number;
  xAxislist: string[],
  itemlist1: number[],
  itemlist2: number[],
  itemlist3: number[],
  itemlist4: number[],
  itemlist5: number[],
  myChartPV: any,
  myChartUV: any,
  myChartIP: any,
  myChartAJAX: any,
  myChartFLOW: any,
  timer: number
}>({
  lable: 1, //1:概况 2：pv|uv|ip
  beginTime: '',
  endTime: '',
  timer: 0,
  appId: '',
  datalist: [],
  today: {
    pv: 0,
    uv: 0,
    ip: 0,
    ajax: 0,
    flow: '0 B'
  },
  surveyone: {
    pv: 0,
    uv: 0,
    ip: 0,
    ajax: 0,
    depth: 0,
    bounce: '0%',
    flow: '0 B',

  },
  errText: '',
  errTextleft: '',
  historylist: [],
  timebetween: 2, // 数据库corn解析出来的时间
  searchbetween: 1, // 实时数据粒度按使维度
  xAxislist: [],
  itemlist1: [],
  itemlist2: [],
  itemlist3: [],
  itemlist4: [],
  itemlist5: [],
  myChartPV: null,
  myChartUV: null,
  myChartIP: null,
  myChartAJAX: null,
  myChartFLOW: null
})

// 获取时间段内数据
const handleGetWebPvUvIpByDay = async () => {
  const data = await getWebPvUvIpByDay({
    appId: 'zZQpe1627352687237',
    beginTime: dayjs().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    endTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
  })
  STATE.today = data
}
// 获取图表最新一次定时任务数据
const handleGetPvUvIpOne = async () => {
  const data = await getPvUvIpOne({
    appId: 'zZQpe1627352687237',
  })
  let datas = data.data;
  let time = dayjs(data.time).format('mm');
  // 动态数据接口 addData
  STATE.xAxislist.shift();
  STATE.itemlist1.shift();
  STATE.itemlist2.shift();
  STATE.itemlist3.shift();
  STATE.itemlist4.shift();
  STATE.itemlist5.shift();

  STATE.xAxislist.push(time);
  STATE.itemlist1.push(datas.pv || 0)
  STATE.itemlist2.push(datas.uv || 0)
  STATE.itemlist3.push(datas.ip || 0)
  STATE.itemlist4.push(datas.ajax || 0)
  STATE.itemlist5.push(datas.flow || 0)

  STATE.myChartPV.setOption({ series: [{ data: STATE.itemlist1 }] });
  STATE.myChartUV.setOption({ series: [{ data: STATE.itemlist2 }] });
  STATE.myChartIP.setOption({ series: [{ data: STATE.itemlist3 }] });
  STATE.myChartAJAX.setOption({ series: [{ data: STATE.itemlist4 }] });
  STATE.myChartFLOW.setOption({ series: [{ data: STATE.itemlist5 }] });
}
// 获取多个维度时段数据
const handleGetPvUvIpList = async () => {
  const data = await getPvUvIpList({
    appId: 'zZQpe1627352687237',
    beginTime: dayjs().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    endTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
  })
  STATE.xAxislist = [];
  STATE.itemlist1 = [];
  STATE.itemlist2 = [];
  STATE.itemlist3 = [];
  STATE.itemlist4 = [];
  STATE.itemlist5 = [];
  data.data.forEach(item => {
    let time = dayjs(item.time).format('HH:mm');
    STATE.xAxislist.push(time);
    STATE.itemlist1.push(item.pv)
    STATE.itemlist2.push(item.uv)
    STATE.itemlist3.push(item.ip)
    STATE.itemlist4.push(item.ajax)
    STATE.itemlist5.push(item.flow)
  });
  nextTick(() => {
    handleDraw('PV', STATE.xAxislist, STATE.itemlist1);
    handleDraw('UV', STATE.xAxislist, STATE.itemlist2);
    handleDraw('IP', STATE.xAxislist, STATE.itemlist3);
    handleDraw('AJAX', STATE.xAxislist, STATE.itemlist4);
    handleDraw('FLOW', STATE.xAxislist, STATE.itemlist5);
  })
  STATE.timer = setInterval(() => {
    handleGetPvUvIpOne()
  }, data.time) as unknown as number
}
// 获取定时任务时段 实时概况处理
const handleGetWebPvUvIpSituation = async () => {
  const data = await getWebPvUvIpSituation({
    appId: 'zZQpe1627352687237',
  })
  STATE.timebetween = data.time / 1000 / 60
  STATE.searchbetween = data.time * 30 / 1000 / 60 / 60;
}
// 获取历史概况
const handleGetHistoryPvUvIplist = async () => {
  const data = await getHistoryPvUvIplist({
    appId: 'zZQpe1627352687237',
  })
  STATE.historylist = data
}

// 切换label
const checkoutLabel = (lable: number) => {
  if (lable === STATE.lable) return;
  STATE.lable = lable;
  STATE.beginTime = '';
  STATE.endTime = '';

  if (lable == 1) {
    clearInterval(STATE.timer)
    handleGetWebPvUvIpByDay();
    handleGetHistoryPvUvIplist();
  } else if (lable == 2) {
    handleGetPvUvIpList();
  };
}
const handleDraw = (type: string, xAxislist: string[], itemlist: number[]) => {
  // 基于准备好的dom，初始化echarts图表
  let color = '';
  if (type == 'PV') {
    STATE.myChartPV = echarts.init(document.getElementById('pvuvip_pv') as HTMLElement);
    color = '#42aaff'
  } else if (type == 'UV') {
    STATE.myChartUV = echarts.init(document.getElementById('pvuvip_uv') as HTMLElement);
    color = '#58d17e'
  } else if (type == 'IP') {
    STATE.myChartIP = echarts.init(document.getElementById('pvuvip_ip') as HTMLElement);
    color = '#f46d85'
  } else if (type == 'AJAX') {
    STATE.myChartAJAX = echarts.init(document.getElementById('pvuvip_ajax') as HTMLElement);
    color = '#8776f7'
  } else if (type == 'FLOW') {
    STATE.myChartFLOW = echarts.init(document.getElementById('pvuvip_flow') as HTMLElement);
    color = '#8776f7'
  }
  const option = {
    legend: {
      data: [type]
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} "
    },
    color: [color],
    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: false }
      }
    },
    grid: {
      borderWidth: 0,
    },
    xAxis: [
      {
        type: 'category',
        data: xAxislist,
        splitLine: {
          show: false,
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#eee',
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#B7B7B7',
            fontSize: 10,
          },
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#B7B7B7',
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#eee',
            width: 1,
          }
        },
        axisLine: {
          show: false,
        },
      }
    ],
    series: [
      {
        name: type,
        type: 'line',
        smooth: true,
        itemStyle: { normal: { areaStyle: { type: 'default' } } },
        data: itemlist
      },
    ]
  };
  // 为echarts对象加载数据
  if (type == 'PV') {
    STATE.myChartPV.setOption(option);
  } else if (type == 'UV') {
    STATE.myChartUV.setOption(option);
  } else if (type == 'IP') {
    STATE.myChartIP.setOption(option);
  } else if (type == 'AJAX') {
    STATE.myChartAJAX.setOption(option);
  } else if (type == 'FLOW') {
    STATE.myChartFLOW.setOption(option);
  }
}
onMounted(() => {
  handleGetWebPvUvIpByDay();
  handleGetWebPvUvIpSituation()
  handleGetHistoryPvUvIplist();
})

</script>
<style scoped lang='scss'>
.com_block {
  padding-bottom: 10px;
}

.survey {
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.survey .com {
  width: 185px;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 35px;
  margin-bottom: 20px;
}

.survey .pv {
  font-size: 38px;
  font-weight: bold;
  color: #8776f7;
  flex-wrap: wrap;
}

.survey .com span {
  font-size: 22px;
  margin-right: 20px;
}

.search_1 .inp {
  background: #fff;
}
</style>
