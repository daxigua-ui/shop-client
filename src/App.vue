<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import {reqCategoryList,reqBanners,reqFloors} from './api'
export default {
  name: "App",

  async mounted() {
    // this.$store.dispatch("getCategoryList");
    // reqCategoryList()

    // const result1 =  reqBanners()
    // const result2 = reqFloors()
    // console.log("result====",result2)
    this.$store.dispatch("getCategoryList");
  },

  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less" scoped>
</style>
