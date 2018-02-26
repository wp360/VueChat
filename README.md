# Vue微信App开发

## 项目说明
- 完成部分： <br>
    页面布局<br>
    页面跳转的过渡动画<br>
    消息项向左滑可删除信息<br>
    聊天智能回复<br>
    聊天更多功能的切换<br>
    (语音/文字)对话框的切换 等等<br>
    用vuex来管理消息、联系人和公众号等数据的状态

## 项目开发
* 使用vue-cli构建项目，安装依赖包

* 项目启动：`npm run dev`

* 开启服务：cd src/server => `nodemon server.js` (服务开启后，可见：Node服务启动端口号8006)

## 项目布局

```
├── build                                        // 项目打包路径
├── config                                       // 基本配置
│   └── dev.env.js
│   └── index.js
│   └── prod.env.js
├── dist                                        // 项目生成文件
├── node_modules                                // 项目依赖包
├── favicon.ico
├── index.html
├── package.json                                 // 安装依赖
├── src                                          // 源码目录
│   ├── assets                                   // 资源文件
│   ├── components                               // 项目组件
│   │   ├── common                               // 【公共组件】
│   │   │   └── bottom-nav.vue                   // 底部导航
│   │   │   └── more.vue                         // 更多
│   │   │   └── search.vue                       // 搜索
│   │   │   └── welcome.vue                      // 欢迎界面
│   │   ├── contact                              // 【通讯录】
│   │   │   └── add-friend.vue                   // 添加朋友
│   │   │   └── contact.vue                      // 通讯录页面
│   │   │   └── group-list.vue                   // 群聊
│   │   │   └── new-friends.vue                  // 新的朋友
│   │   │   └── public-accounts.vue              // 公众号
│   │   │   └── tags.vue                         // 标签
│   │   ├── find                                 // 【发现】
│   │   │   └── find.vue                         // 发现页面
│   │   │   └── moments.vue                      // 朋友圈
│   │   ├── self                                 // 【我】
│   │   │   ├── settings                         // 个人设置
│   │   │   │   ├── common.vue                   // 通用
│   │   │   │   └── notice.vue                   // 新消息提醒
│   │   │   │   ├── privacy.vue                  // 隐私
│   │   │   │   └── security.vue                 // 账号与安全
│   │   │   └── my-qrcode.vue                    // 二维码名片
│   │   │   └── profile.vue                      // 个人信息
│   │   │   └── self.vue                         // 我的页面
│   │   │   └── setting.vue                      // 设置
│   │   ├── wechat                               // ***聊天功能板块***
│   │   │   ├── dialogue-person-info.vue         // 聊天信息
│   │   │   ├── dialogue.vue                     // 聊天页面
│   │   │   └── msg-item.vue                     // 对话信息页
│   │   │   └── msg-list.vue                     // 对话列表页
│   ├── router
│   │   └── router.js                           // 所有页面路由控制中心
│   ├── server
│   │   ├── server.js                          // node服务
│   └── vuex                                   // ***vuex的状态管理***
│       ├── contacts.js                        // 联系人信息
│       ├── getters.js                         // 联系人排列顺序
│       ├── mutations.js                       // 已读消息设置
│       └── public-accounts.js                 // 公众号信息
│       └── store.js                           // 仓库设置
│   ├── App.vue                                // 页面入口文件
│   ├── main.js                                // 程序入口文件，加载各种公共组件
│   ├── static                                 // 【静态文件】
└── README.md                                  // 开发笔记
```

## 跨域
1. 如何发送，端口不一致，使用proxy配置转发

`npm install axios --save`

2. 设置代理(在config->index.js)中
```js
    proxyTable: {
      '/data' : { // data为匹配项
        target: 'http://localhost:8006', // 设置代理目标
        changeOrigin: true,
        pathRewrite: { // 重写路径
          '^/data': '/data'
        }
      }
    },
```
3. 跨域操作
```js
import qs from 'qs';

axios.defaults.transformRequest = [data => qs.stringify(data)]; //跨域
```
[参考文章：vue中使用axios的配置](https://segmentfault.com/q/1010000009860888)

## mongoDB数据库使用
1. 连接数据库
```js
// 先安装 mongoose
// server.js添加
const mongoose = require('mongoose');

//连接Mongo，并且使用data这个集合
const DB_URL = 'mongodb://admin:abc123@ds039684.mlab.com:39684/job-data'; //mongodb://localhost:27017/数据库名称
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('数据库连接成功');
});
```
2. 数据定义 schema && model
[参考文档 —— Mongoose简要API](http://www.cnblogs.com/winyh/p/6682039.html)
```js
const User = mongoose.model('user', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}));

// =========数据操作==========
// 新增数据
User.create({
    user: 'Bob',
    age: 30
}, function (err, doc) {
    if (!err) {
        console.log(doc);
    } else {
        console.log(err);
    }
});

//删除数据
User.remove({age:30},function(err,doc){
    console.log(doc);
});

//更新数据
User.update({'user': 'Bob'},{'$set':{age:31}},function(err,doc){
    console.log(doc);
});

// 查询数据
app.get('/data',function(req,res){
  User.find({},function(err,doc){
    res.json(doc);
  })
});
// 查询单个数据
app.get('/data',function(req,res){
  User.findOne({user:'Bob'},function(err,doc){
    res.json(doc);
  })
});
```
## Socket.io
> socket.io基于webscoket双向通讯协议，后端可以主动推送数据
#### 配合express使用
* const io = require('socket.io');  // 服务端
* import io from 'socket.io-client'  // 客户端
* io.on 监听事件
* io.emit 触发事件

1. 安装依赖
`npm i socket.io socket.io-client --save`

2. 绑定Express
```js
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// io 全局连接 socket 当前连接
io.on('connection',function(socket){
  console.log('用户已经连接上线');
})
// ... 省略

server.listen(8006, () => {
  console.log('Node服务启动端口号8006');
});

// 客户端页面添加
import io from 'socket.io-client';
// 连接socket ws=>websocket 非跨域情况下
const socket = io('ws://localhost:8006');
```
