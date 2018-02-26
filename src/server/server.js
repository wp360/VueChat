const app = require('express')();
const mongoose = require('mongoose');
const server = require('http').Server(app);
const io = require('socket.io')(server);

//连接Mongo，并且使用data这个集合
const DB_URL = 'mongodb://admin:abc123@ds039684.mlab.com:39684/job-data'; //mongodb://localhost:27017
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('数据库连接成功');
});

// 类似于mysql的表 mongo里有文档、字段的概念(参数：文档名称user，值Schema文档生成)
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

app.get('/', (req, res) => {
  res.send('<h1>微信App服务端</h1>');
  //res.sendFile('../components/wechat/dialogue.vue');
});

// 查询数据
app.get('/data',function(req,res){
  User.find({},function(err,doc){
    res.json(doc);
  })
});

io.on('connection', (socket) => {
  //console.log('用户已经连接');
  console.log('用户已经连接上线');
  // socket.emit('message',{manny:'hey how are you?'});
  /*socket.on('another event',(data)=>{
      console.log(data);
  });*/

  // 连接客户端发来的信息
  socket.on('sendmsg', (data) => {
    console.log(data);
    //消息全局发送
    io.emit('recvmsg',data);
  });
  /*
  socket.on('message',(msg)=>{
      console.log(`message:${msg}`);
      io.emit('message',msg);
  });
  */
  socket.on('disconnect', () => {
    console.log('用户断开连接');
    io.emit('message', '用户断开连接');
  });
});

server.listen(8006, () => {
  console.log('Node服务启动端口号8006');
});
