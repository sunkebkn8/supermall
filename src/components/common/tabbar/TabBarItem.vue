<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/home.png" alt />
    <div>首页</div>-->
    <div :style="activeStyle">
      <slot name="item_icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'palevioletred'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick() {
      this.$router.push(this.path)
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.tab-bar-item span {
  font-size: 24px;
  margin-top: 3px;
  display: block;
}
.active {
  color: palevioletred;
}
</style>
