<template>
  <div class="nav-bar">
    <div class="center">
      <slot name="center"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 3px 3px rgba(100, 100, 100, 0.1);
}

.center {
  flex: 1;
}

.left, .right {
  width: 60px;
}
</style>
