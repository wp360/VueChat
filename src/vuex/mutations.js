const mutations = {
    addNewMsg(state) {
        state.newMsgCountTotal > 99 ? state.newMsgCountTotal = '99+' : state.newMsgCountTotal++
    },

    newMsgCountTotal(state) {
        var newMsg = 0
        var msg_counts = state.msgList.baseMsg.length

        for (var i = 0; i < msg_counts; i++) {
            newMsg = newMsg + state.msgList.baseMsg[i].newMsgCount
        }

        return mewMsg
    },

    minusNewMsg(state) {
        state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },

    //已读状态下，消息数量归零
    makeZero(state) {
        var listItemCount = state.msgList.baseMsg.length
        for (var i = 0; i < listItemCount; i ++) {
            state.msgList.baseMsg[i].newMsgCount = 0
        }
    }

}

export default mutations
