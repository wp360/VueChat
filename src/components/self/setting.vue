<template>
    <div id="setting">
        <header id="wx-header">
            <router-link to="/self" class="iconfont icon-return-arrow"></router-link>
            <span>设置</span>
        </header>
        <section>
            <div class="weui-cells">
                <router-link class="weui-cell" to="/self/settings/notice">
                    <div class="weui-cell__bd">新消息提醒</div>
                </router-link>
                <div class="weui-cell">
                    <div class="weui-cell__bd">勿扰模式</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">聊天</div>
                </div>
                <router-link class="weui-cell" to="/self/settings/privacy">
                    <div class="weui-cell__bd">隐私</div>
                </router-link>
                <router-link class="weui-cell" to="/self/settings/common">
                    <div class="weui-cell__bd">通用</div>
                </router-link>
                <router-link class="weui-cell" to="/self/settings/security">
                    <div class="weui-cell__bd">账号与安全</div>
                    <div class="weui-cell__ft"><i></i>已保护</div>
                </router-link>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">关于微信</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">帮助与反馈</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">退出</div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scope>
#setting {
    .weui-cell {
        padding: 9px 11px;
        line-height: 1.5;
        .weui-cell__ft {
            font-size: 14px;
        }
    } 
}
#notice,
.privacy {
    .weui-cell {
        padding: 9px 15px;
    }
    .tip_content {
        margin-top: 4px;
        line-height: 1.5em;
        color: #888;
        font-size: 14px;
    }
}
.privacy {

    line-height: 15px;
    .special_1 {
        visibility: hidden;
    }
    .weui-cell__ft {
        font-size: 14px;
    }
}
#notice {
    .setting_switch {
        flex-basis: auto;
    }
    p.tip_content {
        flex: 1;
    }
}
</style>