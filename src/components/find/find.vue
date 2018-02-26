<template>
    <div id="find">
        <section>
            <div class="weui-cells">
                <router-link to="/find" class="weui-cell moments">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/friends.png" alt="friends">
                    </div>
                    <router-link class="weui-cell__bd" to="/find/moments">朋友圈</router-link>
                </router-link>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/qrcode.png" alt="qrcode" />
                    </div>
                    <div class="weui-cell__bd">扫一扫</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/shake.png" alt="" />
                    </div>
                    <div class="weui-cell__bd">摇一摇</div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/game.png" alt="" />
                    </div>
                    <div class="weui-cell__bd">游戏</div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/mini_program.png"alt="" />
                    </div>
                    <div class="weui-cell__bd">小程序</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
#find {
    a.moments {
        padding: 5px 15px;
    }
    .weui-cells {
        margin-top: 1em;
        .weui-cell {
            padding: 9px 15px;
            .weui-cell__hd {
                img {
                    width: 20px;
                    margin-right: 10px;
                }
            }
            background: #fff;
            .notice {
                position: relative;
                top: 0;
                left: 0;
                img {
                    height: 20px;
                    width:20px;
                }
            }
            .new-msg-notice {
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                width: 5px;
                height: 5px;
                border-radius: 5px;
                background: red;
            }
        }
    } 
}
</style>