<template>
  <div class="goodsitem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsinfo">
      <p>{{goodsItem.title}}</p>
      <div class="goodsprice">
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goodsitem{
  padding-bottom: 40px;
  width: 48%;
}
.goodsitem img{
  width: 100%;
  border-radius: 5px;
}
.goodsinfo{
  margin-top: 3px;;
  font-size: 14px;
}
.goodsinfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodsprice{
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  
}
.goodsprice .price{
  color: var(--color-tint)
}
.collect{
  position: relative;
}
.collect::before{
  content:' ';
  height: 14px;
  width: 14px;
  position: absolute;
  left: -15px;
  top: 1px;
  background: url("~assets/img/favor.png")  0 0/14px 14px;
}
</style>
