<template>
  <div class="page-title">
    <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
    <hr>
  </div>
</template>

<script>

export default {
  name: "PageTitle",
  props: ['icon', 'main', 'sub'],
}
</script>

<style>
.teste {
  display: flex;
  justify-content: flex-end;
}
.page-title h1 {
  margin: 0px;
  color: #282939;
}

</style>