<template>
    <div class="dialogue-person-info">
        <header id="wx-header">
            <span class="iconfont icon-return-arrow" v-on:click="$router.back()"></span>
            <span>聊天信息</span>
        </header>
        <div class="app-content">
            <div class="member clearfix">
                <ul>
                    <li v-for="item in msgData.user" class="person-head">
                        <p><img :src="item.headerUrl"></p>
                        <p class="member-name">{{ item.remark || item.nickname }}</p>
                    </li>
                    <li>
                        <p class="weui-uploader__input-box">
                          <input id="uploaderInput" class="iconfont icon-chat-detail-add weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="">
                        </p>
                    </li>
                </ul>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">置顶聊天</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">消息免打扰</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">设置当前聊天</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">查找聊天记录</div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">清空聊天记录</div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">投诉</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    let datas = this.$store.state.msgList.baseMsg;
    let mid = +this.$route.query.mid;
    let msgData;

    datas.forEach(e => {
      if (e.mid === mid) {
        msgData = e;
      }
    });
    return {
      msgData
    };
  }
};
</script>

<style lang="scss" scope>
.dialogue-person-info {
  .weui-cell {
    padding: 9px 15px;
    line-height: 1.5em;
    .weui-cell__ft {
      margin-bottom: -5px;
    }
  }
  .member {
    margin-top: 1.17647059em;
    padding: 10px;
    background: #fff;
    li {
      float: left;
      .weui-uploader__input-box {
        width: 48px;
        height: 48px;
      }
    }
    .person-head {
      text-align: center;
      .member-name {
        margin-right: 10px;
        font-size: 12px;
      }
    }
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }
}
</style>
