<template>
    <div>
        <header id="wx-header">
            <router-link to="/find" class="iconfont icon-return-arrow"></router-link>
            <span>朋友圈</span>
            <i></i>
        </header>
        <div class="moments_content">
            <div class="theme">
                <div class="theme_img"></div>
                <div class="theme-my-msg">
                    <p>张三</p>
                    <img src="../../assets/images/my_head.jpg" alt="my_head">
                </div>
            </div>
            <div class="page loadmore js_show">
                <div class="page__bd">
                    <div class="weui-loadmore">
                        <i class="weui-loading"></i>
                        <span class="weui-loadmore__tips">正在加载</span>
                    </div>
                    <div class="weui-loadmore weui-loadmore_line">
                        <span class="weui-loadmore__tips">暂无数据</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scope>
.moments_content {
    position: relative;
    .theme_img {
        width: 100%;
        height: 230px;
        background: url('../../assets/images/moments_bg.jpeg') no-repeat;
        background-size: 100% 500px;
        background-position: 0 -70px;
    }
    .theme-my-msg {
        position: absolute;
        top: 0;
        right: 10px;
        p {
            position: absolute;
            top: 198px;
            right: 72px;
        }
        img {
            position: absolute;
            top: 189px;
            right: 0;
            width: 60px;
            border: 2px solid #fff;
        }
    }
    .weui-cell {
        padding: 0 8px 10px;
        .weui-cell__hd {
            img {
                width: 34px;
                margin-right: 8px;
                margin-top: -20px;
            }
        }
        .weui-cell__bd {
            margin-top: 38px;
            line-height: 1.3em;
        }
    }
    .weui-loadmore__tips {
        background: #eee;
    }
    .loadmore {
        margin-top: 40px;
    }
}
</style>
