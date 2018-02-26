<template>
    <div id="security">
        <header id="wx-header">
            <router-link to="/self/setting" class="iconfont icon-return-arrow"></router-link>
            <span>账号与安全</span>
        </header>
        <section class="security-content">
            <div class="weui-cells__title">账号</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">微信号</div>
                    <div class="weui-cell__ft">zhangsan</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">QQ号</div>
                    <div class="weui-cell__ft">2897406527</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">手机号</div>
                    <div class="weui-cell__ft">13000000000</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">邮箱地址</div>
                    <div class="weui-cell__ft">已验证</div>
                </div>
            </div>
            <div class="weui-cells__title">安全</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">声音锁</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">微信密码</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">账号保护</div>
                    <div class="weui-cell__ft">已保护</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">应急联系人</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">手机安全防护</div>
                    <div class="weui-cell__ft">未启用</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>微信安全中心</p>
                        <span>如果你遇到微信被盗，无法登录等问题，可以前往安全中心</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scope>
#security #wx-header {
    position: fixed;
}
.security-content {
    padding-top: 40px;
    .weui-cells {
        .weui-cell {
            line-height: 1.5em;
            padding: 9px 11px;
            .weui-cell__bd {
                span {
                    font-size: 13px;
                    color: #888;
                }
            }
        }
    }
}
</style>
