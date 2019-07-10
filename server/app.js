'use strict'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const mongoose = require('mongoose');
const app = new Koa()

app.use(bodyParser())


mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error:'))
db.once('open',(cb) => {
  console.log('链接数据库成功')
})
// 跨域配置
app.use(cors({
  origin: (ctx) => {
    ctx.set("Access-Control-Allow-Origin", "http://localhost:8082");
    ctx.set("Access-Control-Allow-Headers",'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    ctx.set("Access-Control-Allow-Credentials",true) // 如果 要带参数 或 cookie   withCredentials: true 要设置为 true
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

const router = require('./router')

app.use(router().routes())
app.use(router().allowedMethods());
app.listen(3000)
console.log('app started at port 3000');

module.exports= {
  mongoose :mongoose
}
