import Vue from 'vue';
import Vuex from 'vuex';
import contact from './contacts';
import publicAccounts from './public-accounts';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

const state = {
	newMsgCountTotal: 0, // 未读消息总数
	// headerStatus: true,
	allContacts: contact.contacts,
	publicAccounts: publicAccounts,
	msgList: {
		baseMsg: [{
				"mid": 1, //消息编号
				"type": "friend",
				"group_name": "",
				"group_qrCode": "",
				"read": true, //true；已读 false：未读
				"newMsgCount": 0,
				"quiet": false, // true：消息免打扰开启/关闭
				"msg": [{
					"text": "采用图灵机器人智能回复",
					"name": "个人聊天",
					"headerUrl": "static/images/tx1.jpg"
				}],
				"user": [contact.getUserInfo('wxid_chen')]
			},
			{
				"mid": 2,
				"type": "group",
				"group_name": "聊天室",
				"group_qrCode": "",
				"read": false,
				"newMsgCount": 3,
				"quiet": false,
				"msg": [{
					"text": "进入聊天室可以群聊",
					"name": "聊天室",
					"headerUrl": "static/images/tx2.jpg"
				}],
				"user": [contact.getUserInfo('wxid_feng'), contact.getUserInfo('wxid_li'), contact.getUserInfo('wxid_wang')]
			}
		]
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})