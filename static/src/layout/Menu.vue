<!--
 * @Author: 杨宏旋
 * @Date: 2021-05-12 10:48:11
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-12 15:07:25
 * @Description:
-->
<template>
  <a-menu v-model="current" mode="horizontal" theme="dark" :style="{ lineHeight: '45px' }">
    <a-menu-item key="order">
      <router-link to="/orderindex">
        <RadarChartOutlined />素材管理
      </router-link>
    </a-menu-item>
    <!-- <a-menu-item key="report">
      <router-link to="/reportindex">
        <PieChartOutlined />数据报表
      </router-link>
    </a-menu-item>-->
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  RadarChartOutlined,
  PieChartOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
export default defineComponent({
  setup() {
    const current = ref<string[]>(['order'])
    return {
      current,
    }
  },
  components: {
    RadarChartOutlined,
    PieChartOutlined,
    SettingOutlined,
  },
})
</script>
<style lang="scss" scoped>
.ant-menu {
  flex: 1;
}
</style>
