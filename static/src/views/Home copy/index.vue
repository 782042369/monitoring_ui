<!--
 * @Author: yanghongxuan
 * @Date: 2021-12-23 14:53:05
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-23 14:53:15
 * @Description:
-->
<template>
  <div></div>
</template>
<script lang='ts' setup>
import { defineProps, defineEmit, reactive } from 'vue'
const PROPS = defineProps({
  foo: String,
})
const EMIT = defineEmit(['update', 'delete'])
const STATE = reactive({ 'name': '' })
</script>
<style scoped lang='scss'>
</style>
