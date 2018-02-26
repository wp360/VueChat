<template>
    <div id="new-friends">
        <header id="wx-header">
            <router-link to="/contact" class="iconfont icon-return-arrow"></router-link>
            <span>新的朋友</span>
            <router-link class="header-right" to="/contact/new-friends/add-friend">
                <span>添加朋友</span>
            </router-link>
        </header>
        <div class="person-search">
            <div class="search-tool">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="微信号/QQ号/手机号">
            </div>
        </div>
        <div class="weui-cells__title">新的朋友</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/路人甲.jpg">
                </div>
                <div class="weui-cell__bd">
                    <h5>路人甲</h5>
                    <p>我是路人甲</p>
                </div>
                <div class="weui-cell__ft">已添加</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/路人甲.jpg" alt="" />
                </div>
                <div class="weui-cell__bd">
                    <h5>路人乙</h5>
                    <p>来自手机联系人</p>
                </div>
                <div class="weui-cell__ft">已拒绝</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/路人甲.jpg" alt="" />
                </div>
                <div class="weui-cell__bd">
                    <h5>路人丙</h5>
                    <p>来自账号查找</p>
                </div>
                <div class="weui-cell__ft">
                    <a class="weui-btn weui-btn_mini weui-btn_primary">接受</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>
#new-friends {
    .header-right {
        font-size: 15px;
    }
    .weui-cells__title {
        margin-top: .3em;
        margin-bottom: 0;
        padding-left: 10px;
    }
    .weui-cell {
        padding: 9px 10px 7px;
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
                font-size: 13px;
                color: #888;
            }
        }
        .weui-cell__ft {
            font-size: 12px;
        }
    }
    .person-search {
        color: #888;
        background: #fff;
        padding: 0 10px 5px;
        margin-top: 1em;
        .search-tool {
            display: flex;
            height: 28px;
            padding-top: 5px;
            padding-bottom: 2px;
            border-bottom: 1px solid #eee;
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