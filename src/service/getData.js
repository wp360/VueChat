import * as chatmoreData from './data/chatmore';

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const chatData = () => setpromise(chatmoreData.chatmore); //获取聊天页面轮播数据
