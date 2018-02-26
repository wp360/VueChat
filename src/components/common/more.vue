<template>
    <div class="more-operat">
        <ul>
            <li><i class="iconfont icon-tips-xiaoxi"></i>发起群聊</li>
            <li><i class="iconfont icon-tips-add-friend"></i>添加朋友</li>
            <li><i class="iconfont icon-tips-saoyisao"></i>扫一扫</li>
            <li><i class="iconfont icon-tips-fukuan"></i>收付款</li>
        </ul>
    </div>
</template>

<style lang="scss" scope>
.more-operat {
    position: absolute;
    top: 40px;
    right: -30px;
    width: 160px;
    color: #fff;
    background: #393a3f;
    box-shadow: 0 0 16px #333; 
    z-index: 15;
    li {
        height: 44px;
        padding: 0 10px;
        line-height: 44px;
        border-bottom: 1px solid #000;
        .iconfont {
            margin-right: 10px;
            font-size: 16px;
        }
    }
}
.outter .app-header .header-right .add .more-operat .iconfont {
    font-size: 19px;
}
</style>