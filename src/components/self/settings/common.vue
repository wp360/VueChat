<template>
    <div class="common">
        <header id="wx-header">
            <router-link to="/self/setting" class="iconfont icon-return-arrow"></router-link>
            <span>通用</span>
        </header>
        <section>
            <div class="weui-cells">
                <div class="weui-cell adjust">
                    <div class="weui-cell__bd">开启横屏模式</div>
                    <div class="weui-cell__ft">
                        <input type="checkbox" class="weui-switch">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">自动下载微信安装包</div>
                    <div class="weui-cell__ft">从不</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">多语言</div>
                    <div class="weui-cell__ft">跟随系统</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">字体大小</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">照片和视频</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">功能</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">流量统计</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">清理微信存储空间</div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scope>
.common {
    .weui-cells {
        .weui-cell {
            padding: 10px 11px 9px;
            line-height: 1.4em;
            .weui-cell__ft {
                font-size: 14px;
            }
        }
        .adjust {
            padding: 10px 11px 6px;
        }
    }
}
</style>