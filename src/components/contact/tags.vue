<template>
    <div class="tags">
        <header id="wx-header">
            <div class="header-left">
                <router-link to="/contact" class="iconfont icon-return-arrow"></router-link>
                <span>所有标签</span>
            </div>
            <div class="header-right">
                <span>新建</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">同学(0)</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">朋友(0)</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">家人(0)</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>
.tags {
    .header-right {
        font-size: 15px;
    }
    .weui-cells {
        margin-top: 0;
    }
}
</style>