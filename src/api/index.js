import ajax from './ajax'
import mockAjax from './mockAjax'
// 登录
export function reqLogin(mobile,password) {
  return ajax({
    url:'user/passport/login',
    method: 'POST',
    data:{
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
export const reqProductList = (options) => ajax.post('/list',options)