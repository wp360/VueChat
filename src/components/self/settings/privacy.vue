<template>
    <div id="privacy">
        <header id="wx-header">
            <router-link to="/self/setting" class="iconfont icon-return-arrow"></router-link>
            <span>隐私</span>
        </header>
        <section class="privacy-content">
            <div class="weui-cells__title">通讯录</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">加我为朋友时需要验证</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell switch-main">
                    <div class="setting_switch">
                        <div class="weui-cell__bd">向我推荐通讯录朋友</div>
                        <div class="weui-cell__ft">
                            <input type="checkbox" class="weui-switch">
                        </div>
                    </div>
                    <div class="tip_content">开启后，为你推荐已开通微信的手机联系人。</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">加我为朋友时需要验证</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">添加我的方式</div>
                    <div class="weui-cell__ft special_1"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">通讯录黑名单</div>
                    <div class="weui-cell__ft special_1"></div>
                </div>
            </div>
            <div class="weui-cells__title">朋友圈</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">不让他(她)看我的朋友圈</div>
                    <div class="weui-cell__ft special_1"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">不看他(她)的朋友圈</div>
                    <div class="weui-cell__ft special_1"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">允许陌生人查看十张照片</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">允许朋友查看朋友圈的范围</div>
                    <div class="weui-cell__ft">最近三天</div>
                </div>
                <div class="weui-cell switch-main">
                    <div class="setting_switch">
                        <div class="weui-cell__bd">开启朋友圈入口</div>
                        <div class="weui-cell__ft">
                            <input type="checkbox" class="weui-switch">
                        </div>
                    </div>
                    <div class="tip_content">关闭后，将隐藏“发现”中的朋友圈入口，你发过的朋友圈不会清空，朋友仍可以看到。</div>
                </div>
                <div class="weui-cell switch-main">
                    <div class="setting_switch">
                         <div class="weui-cell__bd">朋友圈更新提醒</div>
                        <div class="weui-cell__ft">
                            <input type="checkbox" class="weui-switch">
                        </div>
                    </div>
                    <div class="tip_content">关闭后，有朋友更新照片时，界面下方的“发现”切换按钮上不再出现红点提示。</div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scope>
#privacy #wx-header {
    position: fixed;
}
.privacy-content {
    padding-top: 40px;
    padding-bottom: 20px;
}
#privacy {
    .weui-cell {
        padding: 9px 11px;
        line-height: 1.5em;
        .weui-cell__ft {
            margin-bottom: -6px;
            font-size: 14px;
        }
    }
    .switch-main {
        display: flex;
        flex-direction: column;
        .setting_switch,
        .tip_content {
            flex: 1;
            width: 100%;
        }
        .tip_content {
            margin-top: 4px;
            font-size: 13px;
            color: #888;
            line-height: 1.4em;
        }
    }
}
</style>