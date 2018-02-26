import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '/',
        name: '微信',
        component: resolve => require(['../components/wechat/msg-list.vue'], resolve)
    },
    {
        path: '/wechat/dialogue',
        name: '对话框',
        components: {
            "subPage": resolve => require(['../components/wechat/dialogue.vue'], resolve),
        }
    },
    {
        path: '/wechat/dialogue/dialogue-person-info',
        name: '聊天对象信息',
        components: {
            "subPage": resolve => require(['../components/wechat/dialogue-person-info.vue'], resolve)
         }
    },
    {
        path: '/find',
        name: '发现',
        component: resolve => require(['../components/find/find.vue'], resolve)
    },
    {
        path: '/find/moments',
        name: '朋友圈',
        components: {
            "subPage": resolve => require(['../components/find/moments.vue'], resolve)
        }
    },
    {
        path: '/contact',
        name: '通讯录',
        component: resolve => require(['../components/contact/contact.vue'], resolve)
    },
    {
        path: '/contact/new-friends',
        name: '新的朋友',
        components: {
            "subPage": resolve => require(['../components/contact/new-friends.vue'], resolve)
        }
    },
    {
        path: '/contact/new-friends/add-friend',
        name: '添加朋友',
        components: {
            "subPage": resolve => require(['../components/contact/add-friend.vue'], resolve)
        }
    },
    {
        path: '/contact/group-list',
        name: '群聊',
        components: {
            "subPage": resolve => require(['../components/contact/group-list.vue'], resolve)
        }
    },
    {
        path: '/contact/public-accounts',
        name: '公众号',
        components: {
            "subPage": resolve => require(['../components/contact/public-accounts.vue'], resolve)
        }
    },
    {
        path: '/contact/tags',
        name: '标签',
        components: {
            "subPage": resolve => require(['../components/contact/tags.vue'], resolve)
        }
    },
    {
        path: '/self',
        name: '我',
        component: resolve => require(['../components/self/self.vue'], resolve)
    },
    {
        path: '/self/profile',
        name: '个人资料',
        components: {
            "subPage": resolve => require(['../components/self/profile.vue'], resolve)
        }
    },
    {
        path: '/self/settings/security',
        name: '账号与安全',
        components: {
            "subPage": resolve => require(['../components/self/settings/security.vue'], resolve)
        }
    },
    {
        path: '/self/setting',
        name: '设置',
        components: {
            "subPage": resolve => require(['../components/self/setting.vue'], resolve)
        }
    },
    {
        path: '/self/settings/notice',
        name: '新消息提醒',
        components: {
            "subPage": resolve => require(['../components/self/settings/notice.vue'], resolve)
        }
    },
    {
        path: '/self/settings/privacy',
        name: '隐私',
        components: {
            "subPage": resolve => require(['../components/self/settings/privacy.vue'], resolve)
        }
    },
    {
        path: '/self/settings/common',
        name: '通用',
        components: {
            "subPage": resolve => require(['../components/self/settings/common.vue'], resolve)
        }
    },
    {
        path: '/search',
        name: '搜索',
        component: resolve => require(['../components/common/search.vue'], resolve)
    },
]

export default new Router({
  mode : 'history',
  base: '/',
  routes
})
