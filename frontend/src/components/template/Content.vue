<template>
  <div class="content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style>
.content {
    grid-area: content;
    background-color: #F3F2F7;
    padding: 20px;
    color: #000;
  }


</style>