<template>
    <li class="list-item" :class="{'item-hide': deleteMsg }" @click="readMsgEvent">
            <router-link :to="{ path: '/wechat/dialogue', query: { mid: item.mid}}" v-swiper class="list-item-content">
                <div class="msg-list-content">
                    <div class="msg-header">
                        <div :class="[item.type == 'group' ? 'multi-header' : '' ]" class="header-box">
                            <img :src="userInfo.headerUrl" v-for="userInfo in item.user">
                        </div>
                        <i class="weui-badge" v-show="!item.read && !item.quiet && item.newMsgCount != 0">{{ item.newMsgCount }}</i>
                        <i class="weui-badge weui-badge_dot" v-show="item.quiet"></i>
                    </div>
                    <div class="msg-content">
                        <h5 v-if="item.type == 'group'">{{ item.group_name }}</h5>
                        <h5 v-else>{{ item.user[0].remark || item.user[0].nickname }}</h5>
                        <p>{{ item.msg[0].text }}</p>
                    </div>
                    <span class="time">{{time | data}}</span>
                    <span class="shield iconfont icon-mute" v-show="item.quiet"></span>
                </div>
            </router-link>
        <div class="operate-box">
            <span class="readed">标记为已读</span>
            <span class="unread">标记为未读</span>
            <span class="delete" @click="deleteMsgEvent">删除</span>
        </div>
    </li>
</template>

<script>
export default {
  data() {
    return {
      time: Date.now(),
      read: this.item.read,
      deleteMsg: false,
      newMsgCount: this.item.newMsgCount,
      quiet: this.item.quiet
    };
  },
  filters: {
   data:function (input) {
    var d = new Date(input);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    return  hour + ':' + minutes;
    // return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
   }
  },
  props: ["item"],
  directives: {
    swiper: {
      bind: function(element, binding) {
        var isTouchMove, startTx, startTy;
        element.addEventListener(
          "touchstart",
          function(e) {
            var touches = e.touches[0];
            startTx = touches.clientX;
            isTouchMove = false;
          },
          false
        );
        element.addEventListener(
          "touchmove",
          function(e) {
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              distanceX = startTx - endTx;
            if (distanceX < 0) {
              //向右滑
              if (Math.abs(distanceX) > 20) {
                element.style.transition = "0.3s";
                element.style.marginLeft = 0 + "px";
              }
            } else {
              //向左滑
              if (distanceX < 156 && distanceX > 20) {
                e.preventDefault();
                element.style.transition = "0s";
                element.style.marginLeft = -distanceX + "px";
                isTouchMove = true;
              }
            }
          },
          false
        );
        element.addEventListener(
          "touchend",
          function(e) {
            if (!isTouchMove) {
              return;
            }
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              distanceX = startTx - endTx,
              isSwipe = false;
            if (distanceX < 0) {
              return;
            }
            if (Math.abs(distanceX) < 60) {
              isSwipe = true;
              element.style.transition = "0.3s";
              element.style.marginLeft = 0 + "px";
            } else {
              element.style.transition = "0.3s";
              element.style.marginLeft = "-178px";
            }
          },
          false
        );
      }
    }
  },
  methods: {
    deleteMsgEvent: function() {
      this.deleteMsg = true;
    },
    readMsgEvent: function() {
      this.item.read = true;
      this.item.quiet = false;
      this.item.newMsgCount = 0;
    }
  }
};
</script>

<style lang="scss" scope>
.list-item {
  position: relative;
  width: 100%;
  height: 65px;
  background: #fff;
  display: flex;
  &.item-hide {
    height: 0;
    transition: 0.3s;
  }
  .msg-list-content {
    display: flex;
    flex: 1;
    position: absolute;
    width: 100%;
    padding: 7px 11px 7px;
    border-bottom: 1px solid #e7e7e7;
    z-index: 1;
    background: #fff;
    .msg-header {
      position: relative;
      width: 50px;
      height: 50px;
      margin-right: 10px;
      .header-box {
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        background: #eee;
        img {
          width: 10%;
          height: auto;
          flex-grow: 1;
          border: 0;
        }
        &.multi-header {
          img {
            margin: 1px;
          }
        }
      }
      .weui-badge {
        position: absolute;
        top: -0.4em;
        right: -0.5em;
      }
      .weui-badge_dot {
        position: absolute;
        top: -0.3em;
        right: -0.3em;
      }
    }
    .msg-content {
      flex: 1;
      padding-top: 2px;
      h5 {
        font-size: 15px;
        font-weight: normal;
      }
      p {
        font-size: 13px;
        color: #888;
        width: 90%;
        height: 24px;
        overflow: hidden;
      }
    }
    .time {
      position: absolute;
      top: 10px;
      right: 10px;
      margin-right: 22px;
      font-size: 13px;
    }
    .icon-mute {
      position: absolute;
      top: 35px;
      right: 10px;
      margin-right: 22px;
      font-size: 15px;
    }
    .time,
    .icon-mute {
      color: #bbb;
    }
  }
}
.operate-box {
  position: absolute;
  right: 0;
  top: 0;
  width: 156px;
  color: #fff;
  z-index: 0;
  span {
    float: left;
    height: 64px;
    line-height: 64px;
    text-align: center;
  }
  .readed {
    display: none;
    width: 96px;
    background: #c7c7cc;
  }
  .unread {
    width: 96px;
    background: #c7c7cc;
  }
  .delete {
    width: 60px;
    background: #ff3b30;
  }
}
</style>



