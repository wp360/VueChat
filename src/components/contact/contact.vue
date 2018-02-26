<template>
    <div id="contact">
        <section class="contact-list">
            <div class="weui-cells no-title">
                <router-link class="weui-cell" to="/contact/new-friends">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/new_friends.png" alt="new_friends" />
                    </div>
                    <div class="weui-cell__bd">新的朋友</div>
                </router-link>
                <router-link class="weui-cell" to="/contact/group-list">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/group_list.png" alt="group_list" />
                    </div>
                    <div class="weui-cell__bd">群聊</div>
                </router-link>
                <router-link class="weui-cell" to="/contact/tags">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/tags.png" alt="tags" />
                    </div>
                    <div class="weui-cell__bd">标签</div>
                </router-link>
                <router-link class="weui-cell" to="/contact/public-accounts">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/public_accounts.png" alt="public_accounts" />
                    </div>
                    <div class="weui-cell__bd">公众号</div>
                </router-link>
            </div>
            <template v-for="(value,key) in contactsList">
                <div class="weui-cells__title initial">{{ key }}</div>
                <div class="weui-cells">
                    <router-link class="weui-cell" v-for="item in value" :key="item.wxid" tags="div" to="">
                        <div class="weui-cell__hd">
                            <img :src="item.headerUrl">
                        </div>
                        <div class="weui-cell__bd">
                            {{ item.remark ? item.remark : item.nickname }}
                        </div>
                    </router-link>
                </div>
            </template>
        </section>
    </div>
</template>

<script>
    export default {
        computed: {
            contactsInitialList() {
                return this.$store.getters.contactsInitialList
            },
            contactsList() {
                return this.$store.getters.contactsList
            }
        }
    }
</script>

<style lang="scss" scope>
#contact {
    position: relative;
    div.no-title {
        margin-top: 0;
    }
    .contact-list {
        padding-bottom: 60px;
            .weui-cells__title {
                margin: 0;
            }
            .weui-cells {
            a {
                color: #000;
            }
            .weui-cell {
                padding: 8px 10px 6px;
                line-height: 1em;
            }
            img {
                width: 32px;
                height: 32px;
                margin-right: 10px;
            }
            .weui-cell:before {
                right: 10px;
                left: 10px;
            }
        }
        .initial {
            font-size: 12px;
        }
    }
}
</style>
