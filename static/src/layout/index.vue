<!--
 * @Author: 杨宏旋
 * @Date: 2021-05-07 14:51:42
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-30 17:46:39
 * @Description:
-->
<template>
  <div class="layout" flex="dir:top">
    <div class="layout-header">
      <a href="/test/index.html">测试页面</a>
      <a href="/test/resourceError.html">资源加载测试页面</a>
      <a href="/test/vue2error.html">vue2测试页面</a>
      <a href="/test/xhrerror.html">请求测试页面</a>
    </div>
    <div class="layout-main" flex>
      <Menu />
      <div class="layout-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import Menu from './Menu.vue'
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  &-header {
    height: 64px;
    background: #fff;
    border-bottom: solid 1px #f1f1f1;
  }
  &-main {
    flex: 1;
  }
  &-content {
    flex: 1;
    margin: 20px;
    overflow: auto;
    height: calc(100vh - 64px - 40px);
  }
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
