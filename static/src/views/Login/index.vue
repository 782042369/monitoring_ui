<!--
 * @Author: 杨宏旋
 * @Date: 2021-07-07 14:12:33
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 14:06:26
 * @Description:
-->
<template>
<div class="login">
  <div class="login-left">
    <div class="home-icon">
      <img src="@/images/bg.jpeg" alt="">
    </div>
    <a-form :model="formState" @submit="handleSubmit" @submit.prevent>
      <h2>欢迎来到monitoring</h2>
      <a-form-item>
        <a-input autocomplete="off" v-model:value="formState.username" placeholder="Username">
          <template v-slot:prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          autocomplete="off"
          v-model:value="formState.password"
          type="password"
          placeholder="Password"
        >
          <template v-slot:prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
  <div class="login-right"></div>
</div>
</template>
<script lang="ts" setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ref, toRaw, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/store/modules/user'

interface FormState {
  username: string
  password: string
}
const formState = reactive<FormState>({
  username: '',
  password: '',
})
const userStore = useUserStore()

const handleSubmit = async () => {
  try {
    const params = toRaw(formState)
    if (params.username === '' || params.password === '') {
      return
    }
    await userStore.login(params)
  } catch (error) {
    console.error('error: ', error)
    message.warning({
      content: '登陆错误' + error,
    })
  }
}
</script>1
<style lang="scss" scoped>
.login{
  display: flex;
  height: 100vh;
  &-left {
    flex: 1;
    height: 100%;
    background-color: #f8f8f8;
    .home-icon{
      margin: 20px 0 400px 30px;
      img{
        width: 200px;
        height: 35px;
        object-fit: cover;
      }
    }
    .ant-form{
      width: 80%;
      margin: 0 auto;
      h2{
        font-size: 35px;
        color: #130a32;
        text-align: center;
        text-shadow: 0 1px 2px rgb(0 0 0 / 20%);
        margin: 10px 0 40px;
        font-weight: 400;
      }
      :deep(.ant-form-item-control-input-content){
        text-align: center;
      }
      .ant-form-item+.ant-form-item{
        margin-top: 30px;
      }
    }
  }
  &-right {
    width: 60%;
    height: auto;
    overflow: hidden;
    height: 100%;
    background: url('@/images/bg.jpeg') no-repeat;
    background-size: cover;
  }
}

</style>
