<template>
    <div class="profile">
        <header id="wx-header">
            <router-link to="/self" class="iconfont icon-return-arrow"></router-link>
            <span>个人信息</span>
        </header>
        <div class="weui-cells page dialog js_show" >
            <div class="weui-cell my_head">
                <div class="weui-cell__bd">头像</div>
                <div>
                    <img src="../../assets/images/my_head.jpg" alt="my_head" />
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">昵称</div>
                <div class="weui-cell__ft">张三</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">微信号</div>
                <div class="weui-cell__ft">zhangsan</div>
            </div>
            <div class="weui-cell my_qrcode">
                <div class="weui-cell__bd">二维码名片</div>
                <div class="weui-cell__ft">
                    <img src="../../assets/images/my_qrcode.png" alt="my_qrcode">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">我的地址</div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">性别</div>
                <div class="weui-cell__ft">男</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">地区</div>
                <div class="weui-cell__ft">上海</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">个性签名</div>
                <div class="weui-cell__ft">未填写</div>
            </div>
        </div>
        <div class="qrcode-dialogue">
            <div class="dialog-mask"></div>
        </div>
    </div>
</template>

<style lang="scss" scope>
.profile {
    .weui-cells {
        div.my_head {
            height: 45px;
            padding: 10px 0 7px 10px;
            img {
                width: 46px;
                height: 46px;
                margin-right: 11px;
            }
        }
        .weui-cell {
            padding: 12px 11px;
            .weui-cell__ft {
                font-size: 14px;
                img {
                    margin-right: 0;
                }
            }
        }
        div.my_qrcode {
            position: relative;
            img {
                position: absolute;
                top: 9px;
                right: 11px;
                width: 20px;
            }
        }
    }
}

</style>
