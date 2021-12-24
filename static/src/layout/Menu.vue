<!--
 * @Author: 杨宏旋
 * @Date: 2021-05-12 10:48:11
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-23 15:02:23
 * @Description:
-->
<template>
  <div class="com_side">
    <div class="list" id="side-main-nav">
      <a href="/web/home">
        <li class="item active" data-mark="home">
          <span class="iconfont">&#xe625;</span>
          <span class="title">数据分析</span>
        </li>
      </a>
      <a href="/web/top">
        <li class="item" data-mark="top">
          <span class="iconfont">&#xe608;</span>
          <span class="title">TOP分析</span>
        </li>
      </a>
      <a href="/web/pagesavg">
        <li class="item" data-mark="pages">
          <span class="iconfont">&#xe6ea;</span>
          <span class="title">访问页面</span>
        </li>
      </a>
      <a href="/web/ajaxavg">
        <li class="item" data-mark="ajax">
          <span class="iconfont">&#xe653;</span>
          <span class="title">AJAX性能</span>
        </li>
      </a>
      <a href="/web/erroravg">
        <li class="item" data-mark="error">
          <span class="iconfont">&#xe627;</span>
          <span class="title">脚本错误</span>
        </li>
      </a>
      <a href="/web/pagesavg">
        <li class="item" data-mark="slowpages">
          <span class="iconfont">&#xe744;</span>
          <span class="title">慢页面追踪</span>
        </li>
      </a>
      <a href="/web/resourcesavg">
        <li class="item" data-mark="resources">
          <span class="iconfont">&#xe677;</span>
          <span class="title">慢资源追踪</span>
        </li>
      </a>
      <a href="/web/analysislist">
        <li class="item" data-mark="analysis">
          <span class="iconfont">&#xe65d;</span>
          <span class="title">用户轨迹</span>
        </li>
      </a>
      <a href="/web/diagram">
        <li class="item" data-mark="diagram">
          <span class="iconfont">&#xe79c;</span>
          <span class="title">流量热力图</span>
        </li>
      </a>
      <a href="/web/alarm">
        <li class="item" data-mark="alarm">
          <span class="iconfont">&#xe626;</span>
          <span class="title">应用告警</span>
        </li>
      </a>
      <a href="/web/setting">
        <li class="item" data-mark="setting">
          <span class="iconfont">&#xe660;</span>
          <span class="title">系统设置</span>
        </li>
      </a>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang="scss" scoped>
.com_side {
  width: 200px;
  padding-top: 20px;
  border-right: solid 1px #f1f1f1;
  background: #fff;
}
.com_side .list {
  overflow-y: auto;
}
.com_side .item {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding-left: 30px;
  position: relative;
  color: #777;
}
.com_side .item:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 5px;
  height: 50px;
  background: #8776f7;
  display: none;
}
.com_side .iconfont {
  font-size: 22px;
}
.com_side .title {
  font-size: 14px;
  margin-left: 20px;
}
.com_side .active {
  color: #8776f7;
}
.com_side .active:after {
  display: block;
}
</style>
