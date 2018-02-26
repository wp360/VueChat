<template>
    <div class="group-list">
        <header id="wx-header">
            <div class="header-left">
                <router-link to="/contact" class="iconfont icon-return-arrow"></router-link>
                <span>群聊</span>
            </div>
            <div class="header-right">
                <div class="search">
                    <i class="iconfont icon-search"></i>
                </div>
                <div class="add">
                    <i class="iconfont icon-tips-jia"></i>
                </div>
            </div>
        </header>
        <div class="weui-cells__title">群聊</div>
        <template v-for="groupInfo in groupList">
            <div class="weui-cells">
                <div class="weui-cell" v-for="item in groupInfo.user">
                    <div class="weui-cell__hd">
                        <img :src="item.headerUrl" height="30" width="30" alt="" />
                    </div>
                    <div class="weui-cell__bd">{{ item.remark }}</div>
                </div>
            </div>
            <p>{{groupInfo.user.length}}个群聊</p>
        </template>
    </div>
</template>

<script>
export default {
    computed: {
        groupList() {
            var group = []
            for (var i in this.$store.state.msgList.baseMsg) {
                if (this.$store.state.msgList.baseMsg[i].type === 'group') {
                    group.push(this.$store.state.msgList.baseMsg[i])
                }
            }
            return group
        }
    }
}
</script>
<style lang="scss" scoped>
.group-list {
    .header-right {
        margin-right: 0;
        font-size: 15px;
    }
    .weui-cells{
      margin-top: 0;
    }
    p{
      text-align: center;
      margin-top: 10px;
    }
}
.weui-cells__title {
    font-size: 14px;
    margin: 5px 0;
    background: #eee;
}
</style>
