<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Rank/>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
    <Brand/>
    
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
import Rank from './Rank/Rank'
import Like from './Like/Like'
import Floor from './Floor/Floor'
import Brand from './Brand/Brand'
import {mapState} from 'vuex'

export default {
  name: "Home",
  mounted() {
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getBanners')
  },
  computed: {
    ...mapState({
      floors:state=>state.home.floors
    })
  },
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
};
</script>

<style lang="less" scoped>
</style>
