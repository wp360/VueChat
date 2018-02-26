<template>
    <div id="notice">
        <header id="wx-header">
            <router-link to="/self/setting" class="iconfont icon-return-arrow"></router-link>
            <span>新消息提醒</span>
        </header>
        <section>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">接收新消息通知</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">接收语音和视频聊天邀请通知</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
            </div>
            <div class="weui-cells switch-other">
                <div class="weui-cell">
                    <div class="setting-switch">
                        <div class="weui-cell__bd">通知显示消息详情</div>
                        <div class="weui-cell__ft">
                            <input type="checkbox" class="weui-switch">
                        </div>
                    </div>
                    <p class="tip_content">若关闭，当收到微信消息时，通知提示将不显示发信人和内容摘要</p>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">声音</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">震动</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scope>
#notice {
    .weui-cell {
        padding: 10px 11px 5px;
        line-height: 1.5;
        .weui-cell__ft {
            font-size: 14px;
        }
    }
    .switch-other {
        .weui-cell {
            display: flex;
            flex-direction: column;
            .setting-switch,
            .tip_content {
                flex: 1;
            }
            .setting-switch {
                width: 100%;
            }
        }
    } 
}
</style>