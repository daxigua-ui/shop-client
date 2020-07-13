import {
  reqShopCart,
  reqAddToCart,
  reqCheckCartItem
} from '@/api'

const state = {
  cartList: [] // 购物车列表
}
const mutations = {
  // 接收保存购物项数据
  RECEIVE_CART_LIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  // 获取购物车数据的异步action
  async getCartList({
    commit
  }) {
    const result = await reqShopCart()
    if (result.code === 200) {
      const cartList = result.data
      commit('RECEIVE_CART_LIST', cartList)
    }
  },
  // 添加到购物车的异步action
  async addToCart({
    commit
  }, {
    skuId,
    skuNum,
    callback
  }) {
    const result = await reqAddToCart(skuId, skuNum)
    if (result.code === 200) {
      callback()

    } else {
      callback('添加购物车失败')

    }
  },
  /* 
  添加到购物车的异步action
  */
  async addToCart2({
    commit
  }, {
    skuId,
    skuNum
  }) {
    const result = await reqAddToCart(skuId, skuNum)
    // 如果请求的结果不正确, 抛出一个错误
    if (result.code !== 200) {
      // 通知组件失败了
      throw new Error('添加购物车失败') // action函数的promise失败了, reason为error
    }
  },
  // 勾选某个购物项商品
  async checkCartItem({
    commit
  }, {
    skuId,
    isChecked
  }) {
    const result = await reqCheckCartItem(skuId, isChecked)
    if (result.code !== 200) {
      throw new Error(result.message || '选中商品失败')
    }
  },
  // 全选
  async checkAllCartItems({
    commit,
    state,
    dispatch
  }, checked) {
    // 确定对应的isChecked值
    const isChecked = checked ? '1' : '0'
    let promises = []

    // 遍历每个购物项
    state.cartList.forEach(item => {
      // 购物项的状态与目标状态不一样
      if (item.isChecked != isChecked) {
        // 分发给checkCartItem, 得到其返回的promise对象
        const promise = dispatch('checkCartItem', {
          skuId: item.skuId,
          isChecked
        })
        // 保存到数组中
        promises.push(promise)
      }
    })

    // 此时请求发出去没有? 已经发了
    // 返回promise对象(只有所有dispatch都成功了才成功, 否则就是失败的)
    return Promise.all(promises)
  },
}
const getters = {
  // 选中总数量
  totalCount(state) {
    return state.cartList.reduce((preTotal, item) => preTotal + (item.isChecked === 1 ? item.skuNum : 0), 0)
  },
  // 选中总价格
  totalPrice(state) {
    return state.cartList.reduce((preTotal, item) => preTotal + item.skuNum * item.cartPrice, 0)
  },
  // 是否全选
  isCheckAll(state) {
    // 如果数组中每个都选中就返回true, 否则是false
    return state.cartList.length > 0 && state.cartList.every((item) => item.isChecked === 1)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}