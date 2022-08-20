import Mock from 'mockjs'
import axios from 'axios'
// 设置延时
Mock.setup({
  timeout:500
})

Mock.mock('/api/get', 'get', () => {
  return {
    success: true
  }
})

export const getList = () => {
  return axios.get('/api/get')
}