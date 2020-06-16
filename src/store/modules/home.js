// 首页数据
import {reqCategoryList,reqBanners,reqFloors} from '@/api'

export default {
  state: {
    categoryList: [],
    banners:[],
    floors:[]
  },
  mutations: {
    RECEIVE_CATEGORY_LIST(state,categoryList){
      state.categoryList = categoryList
    },
    RECEIVE_BANNERS(state,banners){
      state.banners = banners
    },
    RECEIVE_FLOORS(state,floors){
      state.floors = floors
    }
  },
  actions: {
    async getCategoryList({commit}){
      const result = await reqCategoryList()
      if (result.code ===200) {
        const categoryList =  result.data
        commit('RECEIVE_CATEGORY_LIST',categoryList)
      }
    },
    async getBanners({commit}){
      const result = await reqBanners()
      if (result.code ===200) {
        const banners =  result.data
        commit('RECEIVE_BANNERS',banners)
      }
    },
    async getFloors({commit}){
      const result = await reqFloors()
      if (result.code ===200) {
        const floors =  result.data
        commit('RECEIVE_FLOORS',floors)
      }
    },
  },
  getters: {}
}