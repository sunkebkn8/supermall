<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <span class="iconfont icon-icon4" slot="item_icon"></span>
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <span class="iconfont icon-icon-" slot="item_icon"></span>
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <span class="iconfont icon-gouwuche" slot="item_icon"></span>
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <span class="iconfont icon-wode" slot="item_icon"></span>
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/Tabbar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>>
