/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 12:51:20
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 12:55:19
 * @Description:
 */
import type { App } from 'vue'
import {
  message,
  Layout,
  Menu,
  Col,
  Row,
  Form,
  Input,
  Tag,
  Button,
} from 'ant-design-vue'
const plugins = [Layout, Menu, Col, Row, Form, Input, Tag, Button]
export const setupAntd = (app: App) => {
  app.config.globalProperties.$message = message
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
