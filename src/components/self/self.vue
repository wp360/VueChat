<template>
    <div id="self">
        <div>
            <div class="weui-cells">
                <router-link class="weui-cell my_profile" to="/self/profile">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/my_head.jpg" alt="" />
                    </div>
                    <div class="weui-cell__bd">
                        <h4>张三</h4>
                        <p>微信号：zhangsan</p>
                    </div>
                    <div class="weui-cell__ft">
                        <img src="../../assets/images/my_qrcode.png" alt="qrcode" />
                    </div>
                </router-link>
            </div>
            <div class="weui-cells">
                <router-link class="weui-cell" to="">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/album.png" alt="album" />
                    </div>
                    <div class="weui-cell__bd">相册</div>
                </router-link>
                <a class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/collection.png" alt="collection">
                    </div>
                    <div class="weui-cell__bd">收藏</div>
                </a>
            </div>
            <div class="weui-cells">
                <a class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/wallet.png" alt="wallet" />
                    </div>
                    <div class="weui-cell__bd">钱包</div>
                </a>
                <a class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/card_holder.png" alt="card_holder" />
                    </div>
                    <div class="weui-cell__bd">卡包</div>
                </a>
            </div>
            <div class="weui-cells">
                <a class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/expression.png" alt="expression" />
                    </div>
                    <div class="weui-cell__bd">表情</div>
                </a>
            </div>
            <div class="weui-cells">
                <router-link class="weui-cell" to="/self/setting">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/setting.png" alt="setting" />
                    </div>
                    <div class="weui-cell__bd">设置</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>
#self {
    .weui-cells {
        margin-top: 1em;
        img {
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
        .weui-cell {
            padding: 9px 15px;
        }
        .my_profile {
            height: 45px;
            padding: 8px 10px 7px;
            .weui-cell__hd {
                img {
                    width: 46px;
                    height: 46px;
                }
            }
            .weui-cell__bd {
                margin-bottom: 3px;
                line-height: 1.3em;
                h4 {
                    color: #000;
                    font-weight: normal;
                }
                p {
                    color: #888;
                    font-size: 14px;
                }
            }
            .weui-cell__ft {
                img {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
