<template>
  <div id="app">
    <my-header :seller="seller"></my-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods" class="item">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" class="item">评论</router-link>
      </div> 
      <div class="tab-item">
        <router-link to="/sellers" class="item">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {urlParse} from "@/common/js/util";
import myHeader from "@/components/header/header";
const ERR_OK = 0;
export default {
  name: 'App',
  components:{
    myHeader: myHeader
  },
  mounted: function(){
    this.$router.push({path:'/goods'});
  },
  created: function () {
    this.requestData();
  },
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    }
  },
  methods: {
    requestData:function () {
      this.axios.get('/api/seller?id=' + this.seller.id).then((resp) => {
        var erro_num = resp.data.errno;
        if (erro_num === ERR_OK) {
          this.seller = Object.assign({}, this.seller, resp.data.data);
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin.styl"

#app
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    //border-bottom 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      .item
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.router-link-active
          color rgb(240, 20, 20)
</style>
