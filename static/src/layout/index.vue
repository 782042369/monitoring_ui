<!--
 * @Author: 杨宏旋
 * @Date: 2021-05-07 14:51:42
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-26 10:48:34
 * @Description:
-->
<template>
  <a-layout>
    <a-layout-header flex>
      <!-- <Menu /> -->
      <UserInfo />
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserInfo from './UserInfo.vue'
// import Menu from './Menu.vue'

export default defineComponent({
  setup() {},
  components: {
    UserInfo,
    // Menu,
  },
})
</script>
<style lang="scss" scoped>
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
