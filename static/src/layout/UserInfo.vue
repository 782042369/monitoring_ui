<!--
 * @Author: 杨宏旋
 * @Date: 2021-05-12 10:48:01
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-21 17:30:58
 * @Description:
-->
<template>
  <div class="userinfo" @click="handleLoginOut">退出</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '@/store/modules/user'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const handleLoginOut = () => {
      userStore.resetStateToken()
    }
    return {
      handleLoginOut,
    }
  },
})
</script>
<style lang="scss" scoped>
.userinfo {
  color: #fff;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
}
</style>
