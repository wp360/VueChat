<template>
    <div class="dialogue">
        <header id="wx-header">
            <router-link to="/" class="iconfont icon-return-arrow"></router-link>
            <span v-if="group_num != 1">{{ group_name }}</span>
            <span v-else>{{ userMsg.remark }}</span>
            <span v-show="group_num != 1"> ({{ group_num }})</span>
            <router-link :to="{ path: '/wechat/dialogue/dialogue-person-info', query: { mid: $route.query.mid}} " class="iconfont icon-chat-friends header-right"></router-link>
        </header>
        <section>
            <div v-for="item in news" class="mainnews">
                <newsitem :singlenews="item"></newsitem>
            </div>
        </section>
        <footer :class=" {footshow : clickmore}">
          <section class="dialogue-operate foot_top">
              <div class="dialogue-bar">
                  <i v-show="!voice" v-on:click="voice=true" class="iconfont icon-dialogue-jianpan"></i>
                  <i v-show="voice" v-on:click="voice=false" class="iconfont icon-dialogue-voice"></i>
                  <button v-show="voice">按住 说话</button>
                  <input v-show="!voice" type="text" v-model="message" @keyup="keysend($event)" v-on:input="whatInput" maxlength="25" @click="inputBottomHide" :class="{lightborder : light}" @keyup.enter="enterThing">
                  <a href="javascript:;" class="iconfont icon-dialogue-smile"></a>
                  <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" v-if="light" @click="send">发送</a>
                  <a href="javascript:;" v-else @click="bottomShow" class="iconfont icon-dialogue-jia"></a>
              </div>
          </section>
          <section class="foot_bottom">
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="(value,item) in chatData">
                        <ul class="clear">
                          <li v-for="value in value">
                            <div class="swiper_svg" @click="wxFn(value.chatSvgid)">
                              <i class="wxicon" :class="value.chatSvgid"></i>
                            </div>
                            <div class="swiper_text">
                              {{value.chatSvgname}}
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>
                  <div class="swiper-pagination"></div>
              </div>
          </section>
        </footer>
    </div>
</template>
<script>
import "../../../static/js/swiper.min.js";
import newsitem from "./newsitem/newsitem";
import { chatData } from "../../service/getData";
import axios from "axios";

// 客户端
// import io from "socket.io-client";
// 连接socket ws=>websocket 非跨域情况下
// const socket = io("ws://localhost:8006");

const socket = io.connect("http://localhost:8006");

function ObjStory(
  rec,
  send,
  id,
  info //声明对象
) {
  this.rec = rec;
  this.send = send;
  this.info = info;
  this.id = id;
}

export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    let datas = this.$store.state.msgList.baseMsg;
    let mid = +this.$route.query.mid;
    let msgData;

    datas.forEach(e => {
      if (e.mid === mid) {
        msgData = e;
      }
    });
    let userMsg = msgData.user[0];
    let group_name = msgData.group_name;
    let group_num = msgData.user.length;
    return {
      light: false, //输入框不为空时，input下边框变色
      clickmore: false, //点击加号底部显示、隐藏
      voice: false,
      news: [], // 存放消息的数组
      roobet: "",
      message: "", //输入的文本内容
      text: "",
      chatData: {},
      msgData,
      userMsg,
      group_num,
      group_name
    };
  },
  mounted() {
    socket.on("recvmsg", data => {
      console.log(`${data.message}`);
    });

    chatData()
      .then(res => {
        this.chatData = res;
      })
      .then(() => {
        //初始化swiper
        new Swiper(".swiper-container", {
          pagination: ".swiper-pagination",
          loop: false
        });
      });
    //this.chatname=this.infor.remarks ? this.infor.remarks : this.infor.petname;
  },
  components: {
    newsitem
  },
  methods: {
    // 聊天新增功能
    wxFn(e) {
      if (e == "icon-xiangce1") {
        alert("相册");
      }
      if (e == "icon-paishexuanzhong") {
        alert("拍摄");
      }
      if (e == "icon-shipin") {
        alert("视频聊天");
      }
      if (e == "icon-msnui-pos") {
        alert("位置");
      }
      if (e == "icon-icon-test") {
        alert("红包");
      }
      if (e == "icon-zhuanzhang") {
        alert("转账");
      }
      if (e == "icon-yuyin") {
        alert("语音输入");
      }
      if (e == "icon-mingpian") {
        alert("名片");
      }
      if (e == "icon-shoucang") {
        alert("我的收藏");
      }
      if (e == "icon-wenjian") {
        alert("文件");
      }
    },
    whatInput() {
      if (this.message.replace(/\s+/g, "") == "") {
        this.light = false;
      } else {
        this.light = true;
      }
    },
    enterThing() {
      if (this.light) {
        this.send();
      }
    },
    bottomShow() {
      this.clickmore = true;
    },
    bottomHide() {
      this.clickmore = false;
    },
    inputBottomHide() {
      this.clickmore = false;
    },
    send() {
      this.light = false;
      if (this.message === "") {
        return;
      }
      //禁止发送空消息
      let input = this.message;

      socket.emit("sendmsg", { message: this.message }); //向服务器发送消息

      this.message = ""; //尽量快速清除message
      var item = new ObjStory(false, true, "wxid_wo", input);
      this.news.push(item);
      axios
        .post(
          "http://www.tuling123.com/openapi/api?key=7214bc92224340b793483a4d13fd4e15&info=" +
            input,
          { emulateJSON: true }
        )
        .then(
          response => {
            console.log(response.data);
            if (typeof response.data.text === "object") {
              this.roobet = response.data.text.text;
            } else this.roobet = response.data.text;
            var item = new ObjStory(
              true,
              false,
              this.userMsg.wxid,
              this.roobet
            );
            this.news.push(item);
          },
          error => {
            console.log("失败");
          }
        );
      /*
          setTimeout(() => {
              window.scrollTo(0, this.$refs.singleHeight.offsetHeight + this.$refs.top.offsetHeight
                  + this.$refs.bottom.offsetHeight
                  - window.innerHeight)
          }, 300)*/
    },
    keysend(event) {
      if (event.keyCode == 13) {
        this.send();
      }
    }
  },
  computed: {
    msgInfo() {
      for (var i in this.$store.state.msgList.baseMsg) {
        if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
          return this.$store.state.msgList.baseMsg[i];
        }
      }
    }
  },
  created() {
    if (this.$route.query.group_num == 1) {
      return (this.one = true);
    }
  }
};
</script>
<style>
@import "../../../static/css/swiper.min.css";
</style>
<style lang="scss" scope>
@import "../../assets/css/base";
.msg-other-side {
  display: flex;
  margin: 30px 0;
  img {
    width: 40px;
    height: 40px;
    margin: 0 9px 0 6px;
  }
  .msg-text-box {
    position: relative;
    top: -7px;
    flex: 1;
    margin-right: 54px;
    .user-name {
      position: relative;
      padding-left: 3px;
      font-size: 12px;
      color: #a09f9f;
    }
    .msg-text-content {
      position: relative;
      flex: 1;
      padding: 9px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 13px;
      background: #fff;
      .more-msg-operat {
        display: none;
        position: absolute;
        top: 28px;
        left: 110px;
        padding: 8px 10px;
        background: #fff;
        z-index: 3;
        border: 1px solid red;
        li {
          padding: 5px 2px;
        }
      }
      .triangle-out,
      .triangle-in {
        position: absolute;
        width: 0;
        height: 0;
        transform: rotate(-90deg);
      }
      .triangle-out {
        top: 16px;
        left: -9px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #ddd;
      }
      .triangle-in {
        top: 16px;
        left: -8px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #fff;
      }
    }
  }
}
.dialogue {
  .dialogue-operate {
    font-size: 32px;
    background: #f3f3f3;
    .dialogue-bar {
      display: flex;
      align-items: center;
      height: 100%;
      color: #7d7e83;
      .icon-dialogue-voice,
      .icon-dialogue-smile,
      .icon-dialogue-jia,
      .icon-dialogue-jianpan {
        display: block;
        margin: 0 5px;
        flex: 0 0 30px;
      }
      .icon-dialogue-jianpan {
        font-size: 30px;
      }
      input {
        width: 100%;
        flex: 1;
        border: none;
        padding-bottom: 3px;
        padding-top: 5px;
        border-bottom: 1px solid #ddd;
        font-size: 18px;
        outline: none;
        background: #f3f3f3;
        &:focus {
          border-bottom: 1px solid #45c01a;
        }
      }
      button {
        flex: 1;
        height: 30px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #888;
        background: #fff;
        outline: none;
      }
      .weui-btn {
        margin: 10px;
      }
    }
  }
}
.footshow {
  bottom: 0;
  transition: all 0.2s;
}
footer {
  position: fixed;
  z-index: 10;
  border-top: 1px solid #e0e0e0;
  background: #f5f5f5;
  bottom: -11.712rem;
  width: 100%;
  .foot_bottom {
    height: 11.712rem;
    border-top: 1px solid #e0e0e0;
    .swiper-container {
      width: 100%;
      height: 11.712rem;
      overflow: hidden;
      .swiper-slide {
        width: 100%;
        ul {
          padding: 1rem 0;
          box-sizing: border-box;
          li {
            float: left;
            width: 25%;
            margin-bottom: 1.1946666667rem;
            .swiper_svg {
              @include widthHeight(3rem,2.8rem);
              background: #fcfcfc;
              border: 1px solid #d3d3d3;
              border-radius: 10px;
              @include justify(center);
              align-items: center;
              margin: 0 auto;
              svg {
                @include widthHeight(1.28rem,0.9386666667rem);
                display: block;
              }
            }
            .swiper_text {
              width: 100%;
              margin-top: 0.256rem;
              text-align: center;
              @include sizeColor(0.6693333333rem,#7a8187);
            }
          }
          li:nth-of-type(4n + 4) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
