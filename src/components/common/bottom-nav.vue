<template>
    <div id="bottom-nav">
        <nav>
            <router-link to="/" tag="dl" exact>
                <dt>
                    <span class="iconfont icon-wechat"><i v-show="newMsgCountTotal != 0" class="weui-badge">{{ newMsgCountTotal }}</i></span>
                </dt>
                <dd>微信</dd>
            </router-link>
            <router-link to="/contact" tag="dl">
                <dt>
                    <i class="iconfont icon-contact"></i>
                </dt>
                <dd>通讯录</dd>
            </router-link>
            <router-link to="/find" tag="dl">
                <dt>
                    <i class="iconfont icon-find"></i>
                </dt>
                <dd>发现</dd>
            </router-link>
            <router-link to="/self" tag="dl">
                <dt>
                    <i class="iconfont icon-me"></i>
                </dt>
                <dd>我</dd>
            </router-link>
        </nav>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            newMsgCountTotal() {
                var newMsg = 0
                var msg_counts = this.$store.state.msgList.baseMsg.length
                for (var i = 0; i < msg_counts; i++) {
                    if (this.$store.state.msgList.baseMsg[i].newMsgCount != 0) {
                        newMsg = newMsg + this.$store.state.msgList.baseMsg[i].newMsgCount
                    }
                }
                return newMsg
            }
        }
    }
</script>

<style lang="scss" scope>
#bottom-nav {
    position: relative;
    color: #888;
    nav {
        display: flex;
        display: -webkit-felx;
        display: -webkit-box;
        display: -ms-flexbox;
        width: 100%;
        padding-top: 3px;
        overflow: hidden;
        background: #fff;
        font-size: 12px;
        .iconfont {
            font-size: 22px;
        }
        dl {
            -webkit-box-flex: 1;
            flex-grow: 1;
            text-align: center;
            background: #fff;
            &.router-link-active {
                dd,
                dt {
                    color: #0bb908;
                }
            }
            dt {
                line-height: 1;
                span {
                    position: relative;  
                }
            }
            dd {
                font-size: 12px;
            }
        } 
    }
    .weui-badge {
        position: absolute;
        top: 0px;
        left: 15px;
    }
}
</style>