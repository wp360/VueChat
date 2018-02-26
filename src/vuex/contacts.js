const contacts = [{
		"wxid": "wxid_chen",
		"initial": "c",
		"headerUrl": "/static/images/tx1.jpg",
		"nickname": "chen",
		"sex": 1,
		"remark": "陈",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_feng",
		"initial": 'f',
		"headerUrl": "/static/images/tx2.jpg",
		"nickname": "feng",
		"sex": 1,
		"remark": "冯",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_li",
		"initial": 'l',
		"headerUrl": "/static/images/tx3.jpg",
		"nickname": "li",
		"sex": 1,
		"remark": "李",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_qian",
		"initial": 'q',
		"headerUrl": "/static/images/tx4.jpg",
		"nickname": "qian",
		"sex": 1,
		"remark": "钱",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_sun",
		"initial": 's',
		"headerUrl": "/static/images/tx5.jpg",
		"nickname": "sun",
		"sex": 0,
		"remark": "孙",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_wu",
		"initial": 'w',
		"headerUrl": "/static/images/tx6.jpg",
		"nickname": "wu",
		"sex": 0,
		"remark": "吴",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_wang",
		"initial": 'w',
		"headerUrl": "/static/images/tx7.jpg",
		"nickname": "wang",
		"sex": 1,
		"remark": "王",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_zhao",
		"initial": 'z',
		"headerUrl": "/static/images/tx8.jpg",
		"nickname": "zhao",
		"sex": 0,
		"remark": "赵",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_zhou",
		"initial": 'z',
		"headerUrl": "/static/images/tx9.jpg",
		"nickname": "zhou",
		"sex": 0,
		"remark": "周",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_zheng",
		"initial": 'z',
		"headerUrl": "/static/images/tx10.jpg",
		"nickname": "zheng",
		"sex": 1,
		"remark": "郑",
		"telphone": 12345678900
	},
	{
		"wxid": "wxid_wo",
		"initial": 'w',
		"headerUrl": "/static/images/22.jpg",
		"nickname": "wo",
		"sex": 0,
		"remark": "我",
		"telphone": 12345678900
	}
]

const contact = {
	contacts
}

//获取contacts.js中聊天对象的信息
contact.getUserInfo = function(wxid) {
	if (!wxid) {
		return;
	} else {
		for (var index in contacts) {
			if (contacts[index].wxid === wxid) {
				return contacts[index]
			}
		}
	}
}

export default contact