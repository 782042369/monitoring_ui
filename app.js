/*
 * @Author: 杨宏旋
 * @Date: 2020-07-01 14:41:22
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-26 12:24:54
 * @Description:
 */
const Koa = require('koa')
const path = require('path')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const KoaStatic = require('koa-static')
const serveStatic = require('serve-static')
const compress = require('koa-compress')
const proxy = require('koa2-proxy-middleware')
const k2c = require('koa2-connect')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const cors = require('koa2-cors')
const koaBody = require('koa-body')

// 创建代理服务器
const app = new Koa()
// GZIP
const options = { threshold: 1024 }
app.use(compress(options))

// 跨域
app.use(async (ctx, next) => {
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200
  }
  await next()
})
app.use(
  cors({
    origin() {
      return 'http://localhost:3000/'
      // return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 100,
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'X-Custom-Header',
      'anonymous',
    ], //设置服务器支持的所有头信息字段
  })
)
// error handler
onerror(app)
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})
/**
 * 使用http代理请求转发，用于代理页面当中的http请求
 * 这个代理请求得写在bodyparse的前面，
 */

const proxyOptions = {
  targets: {
    '/ksapi/(.*)': {
      target: 'https://suzao.e.kuaishou.com',
      changeOrigin: true,
      secure: false,
      autoRewrite: true,
      ws: true,
      headers: {
        host: 'suzao.e.kuaishou.com',
      },
      pathRewrite: {
        '^/ksapi': '', // rewrite path
      },
      onProxyReq(proxyReq, req) {
        Object.keys(req.headers).forEach((ele) => {
          if (ele.toLocaleLowerCase() === 'cookie') {
            proxyReq.setHeader('cookie', req.headers[ele])
          }
        })
      },
    },
  },
}
app.use(proxy(proxyOptions))
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
// // 上传限制
app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 2000000 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
    },
  })
)
// 这句代码需要在koa-static上面
app.use(
  historyApiFallback({
    index: 'index.html',
    whiteList: ['/ksapi'],
  })
)
// static 配置
app.use(
  KoaStatic(path.join(__dirname, 'static/dist'), {
    maxage: 31536000000,
    setHeaders: (res, pathVal) => {
      // 通过serve-static的mime对象的lookup方法查看文件的mime类型
      if (serveStatic.mime.lookup(pathVal) === 'text/html') {
        // Custom Cache-Control for HTML files
        res.setHeader('Cache-Control', 'max-age=0, no-store')
      }
    },
  })
)
// 静态服务端口
app.listen(8588, () => {
  console.log('http://localhost:8588')
})
