import ajax from './ajax'
import mockAjax from './mockAjax'
// 登录
export function reqLogin(mobile, password) {
  return ajax({
    url: 'user/passport/login',
    method: 'POST',
    data: {
      mobile,
      password
    }
  })
}
//  首页三级分类
export const reqCategoryList = () => ajax('product/getBaseCategoryList')
// 轮播
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
// 搜索
export const reqProductList = (options) => ajax.post('/list', options)
// 获取商品详情
export const reqDetailInfo = (skuId) => ajax.get(`/item/${ skuId }`)
// 添加到购物车
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${ skuId }/${ skuNum }`)
// 获取购物车列表
export const reqShopCart = () => ajax.get('/cart/cartList')
// 切换商品选择状态
export const reqCheckCartItem = (skuId,isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)
// 删除购物车中的某个商品
export const reqDeleteCheckItem =(skuId) => ajax.DELETE(`/cart/deleteCart/${skuId}`)