<!--
 * @Author: yanghongxuan
 * @Date: 2021-12-23 10:57:40
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-23 17:16:37
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
        实时概况处理同步有{{ STATE.timebetween }}分钟以内的延迟，每{{ STATE.timebetween }}分钟自动更新一次。
      </div>
      <div class="com_block mt20">
        <h1 class="com_h2 mb20">查询某日概况</h1>
        <div class="search mb20">
          <input id="zane-calendar-1" class="inp" type="text" placeholder="点击选择日期" />
          <div class="tipscolor mt10" v-if="STATE.errTextleft">{{ STATE.errTextleft }}</div>
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
          <h1 class="com_h2 mb20">{{ item.create_time }}</h1>
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
              {{ item.flow }}
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
        <h1 class="com_h2 mb20">实时访问AJAX</h1>
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
import { reactive } from 'vue'
const STATE = reactive<{
  lable: number;
  beginTime: string;
  endTime: string;
  timer: null;
  appId: string;
  datalist: never[];
  today: {
    pv: number
    uv: number
    ip: number
    ajax: number
    flow: number
  };
  surveyone: {
    app_id?: string
    pv: number
    uv: number
    ip: number
    ajax: number
    flow: number
    bounce: string
    depth: number
  };
  errText: string;
  errTextleft: string;
  historylist: {
    create_time: string
    pv: number
    uv: number
    ip: number
    ajax: number
    flow: number
    bounce: string
    depth: number
  }[];
  timebetween: number;
  searchbetween: number;
}>({
  lable: 1, //1:概况 2：pv|uv|ip
  beginTime: '',
  endTime: '',
  timer: null,
  appId: '',
  datalist: [],
  today: {
    pv: 0,
    uv: 0,
    ip: 0,
    ajax: 0,
    flow: 0
  },
  surveyone: {
    pv: 0,
    uv: 0,
    ip: 0,
    ajax: 0,
    depth: 0,
    bounce: '0%',
    flow: 0,

  },
  errText: '',
  errTextleft: '',
  historylist: [],
  timebetween: 1,
  searchbetween: 1,
})
const getPvUvIpSurvey = () => {

}
const getHistoryPvUvIplist = () => {

}
const getPvUvIpList = () => {

}

const checkoutLabel = (lable) => {
  if (lable === STATE.lable) return;
  STATE.lable = lable;
  STATE.beginTime = '';
  STATE.endTime = '';

  if (lable == 1) {
    getPvUvIpSurvey();
    getHistoryPvUvIplist();
  } else if (lable == 2) {
    getPvUvIpList();
  };
}
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
