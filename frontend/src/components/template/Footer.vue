<template>
  <footer class="footer">
    <span>
     Desenvolvido com <i class="fa fa-heart text-danger"></i> por
     <strong>@luizarthur.<i class="text-danger">F</i>ortunato</strong>
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #FFF;
  color: #282939;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>