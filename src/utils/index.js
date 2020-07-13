// 工具函数的模块
import {v4 as uuidv4} from 'uuid';
// 设置用户临时id
export function getUserTempId() {
  // 从localStorage中读取,如果有就返回
  let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
  }
  return userTempId
}