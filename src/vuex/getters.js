const getters = {
    //从联系人中提取首字母
    contactsInitialList: (state) => {
        var initialList = [],
            allContacts = state.allContacts,
            allContactsCounts = allContacts.length

        for (var i = 0; i < allContactsCounts; i ++) {
            if (initialList.indexOf(allContacts[i].initial.toUpperCase()) === -1) {
                initialList.push(allContacts[i].initial.toUpperCase())
            }
        }

        return initialList.sort()
    },
    //按首字母分类
    contactsList: (state, getters) => {
        var contactsList = {}, 
        allContacts = state.allContacts,
        allContactsCounts = allContacts.length
        
        for (var i = 0; i < getters.contactsInitialList.length; i++) {
            var protoTypeName = getters.contactsInitialList[i] //指定首字母作为对象属性名
                contactsList[protoTypeName] = [] //指定对象属性为一个数组方便储存数据
            for (var j = 0; j < allContactsCounts; j++) { //遍历所有联系人
                if (allContacts[j].initial.toUpperCase() === protoTypeName) {
                    contactsList[protoTypeName].push(allContacts[j])
                }
            }
        }
        return contactsList
    }

}

export default getters