<template>
    <div class="public-accounts">
        <header id="wx-header">
            <router-link to="/contact" class="iconfont icon-return-arrow"></router-link>
            <span>公众号</span>
            <div class="header-right">
                <div class="search" tag="div">
                    <i class="iconfont icon-search"></i>
                </div>
                <div class="add">
                    <i class="iconfont icon-tips-jia"></i>
                </div>
            </div>
        </header>
        <div class="public-accounts-content">
            <template v-for="(value, key) in publicAccountsList"> 
                <div class="weui-cells__title">{{ key }}</div>
                <div class="weui-cells">
                    <div class="weui-cell" v-for="item in value">
                        <div class="weui-cell__hd">
                            <img :src="item.headerUrl" height="20" width="20" alt="" />
                        </div>
                        <div class="weui-cell__bd">{{ item.name }}</div>
                    </div>
                </div>
            </template>
        </div>
        
    </div>
</template>

<script>
    export default {
        computed: {
            //首字母
            initialList: function() {  
                var initialList = [],
                    publicAccounts = this.$store.state.publicAccounts,
                    max = publicAccounts.length

                for (var i = 0; i < max; i++) {
                    if (initialList.indexOf(publicAccounts[i].initial) === -1) {
                       initialList.push(publicAccounts[i].initial) 
                    }
                }

                return initialList.sort()
            },
            //公众号
            publicAccountsList() {
                var publicAccountsList = {}, 
                    publicAccounts = this.$store.state.publicAccounts,
                    max = publicAccounts.length

                for (var i = 0; i < this.initialList.length; i++) {
                    var protoTypeName = this.initialList[i] //key为protoTypeName，即首字母
                        publicAccountsList[protoTypeName] = []

                    for (var j = 0; j < max; j++) {
                        if (publicAccounts[j].initial === protoTypeName) {
                            publicAccountsList[protoTypeName].push(publicAccounts[j])
                        }
                    }
                }
                return publicAccountsList
            }
        }
    }
</script>

<style lang="scss" scope>
.public-accounts {
    .weui-cells__title {
        font-size: 13px;
        margin-top: .1em;
        margin-bottom: 0;
        background: #eee;
    }
    .weui-cell {
        padding: 10px;
        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }
    #wx-header {
        position: fixed;
        .header-right {
            margin-right: 0;
            font-size: 15px;
        }
    }
    .public-accounts-content {
        padding-top: 40px;
    }
}
</style>