<template>
    <div id="add-friend">
        <header id="wx-header">
            <router-link to="/contact/new-friends" class="iconfont icon-return-arrow"></router-link>
            <span>添加朋友</span>
        </header>
        <div>
            <div class="person-search">
                <div class="search-tool">
                    <i class="iconfont icon-search"></i>
                    <input type="text" placeholder="微信号/QQ号/手机号">
                </div>
            </div>
            <p class="my_wx">
                <span>我的微信号：zhangsan</span>
                <img src="../../assets/images/my_qrcode.png" class="my_qrcode">
            </p>
            <div>
                <div class="weui-cells">
                    <a class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/雷达加朋友.png" alt="雷达加朋友" />
                        </div>
                        <div class="weui-cell__bd">
                            <h5>雷达加朋友</h5>
                            <p>添加身边的朋友</p>
                        </div>
                    </a>
                    <a class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/面对面建群.png" alt="面对面建群" />
                        </div>
                        <div class="weui-cell__bd">
                            <h5>面对面建群</h5>
                            <p>与身边的朋友进入同一个群聊</p>
                        </div>
                    </a>
                    <a class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/扫一扫.png" alt="扫一扫" />
                        </div>
                        <div class="weui-cell__bd">
                            <h5>扫一扫</h5>
                            <p>扫描二维码名片</p>
                        </div>
                    </a>
                    <a class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/手机联系人.png" alt="手机联系人" />
                        </div>
                        <div class="weui-cell__bd">
                            <h5>手机联系人</h5>
                            <p>添加或邀请通讯录中的朋友</p>
                        </div>
                    </a>
                    <a class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/公众号.png" alt="公众号" />
                        </div>
                        <div class="weui-cell__bd">
                            <h5>公众号</h5>
                            <p>获取更多资讯和服务</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scope>
#add-friend {
    .my_wx {
        margin-top: 5px;
        text-align: center;
        font-size: 14px;
        color: #888;
    }
    .my_qrcode {
        width: 20px;
        margin-bottom: -4px;
    }
    .weui-cell {
        padding: 10px 10px 7px;
        .weui-cell__hd {
            img {
                width: 35px;
                height: 35px;
                margin-right: 10px;
            }
        }
        .weui-cell__bd {
            line-height: 1.3em;
            h5 {
                font-size: 15px;
                font-weight: normal;
            }
            p {
                font-size: 12px;
                color: #888;
            }
        }
    }
    .person-search {
        margin-top: 1em;
        color: rgb(69, 192, 26);
        background: #fff;
        padding: 0 10px 5px;
        .search-tool {
            display: flex;
            height: 28px;
            padding-top: 5px;
            padding-bottom: 2px;
            border-bottom: 1px solid rgb(18, 218, 38);
            align-items: baseline;
        }
        i {
            margin-left: 10px;
            margin-right: 5px;
            font-size: 20px;
        }
        input {
            flex: 1;
            border: none;
            color: #888;
            font-size: 14px;
            outline: none;
        }
        input::placeholder {
            color: #aaa;
        }
    }
}

</style>
