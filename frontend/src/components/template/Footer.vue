<template>
  <footer class="footer">
<!--     <p>
     Desenvolvido com <i class="fa fa-heart text-danger"></i> por
     <strong><a class="link" href="https://www.linkedin.com/in/arthur-forturnato-643828187/" target="_blank">@luizarthur.</a>
     <i class="text-danger">F</i><a class="link" href="https://www.linkedin.com/in/arthur-forturnato-643828187/" target="_black">ortunato</a></strong>
    </p> -->
    <span>
     Desenvolvido com <i class="fa fa-heart text-danger"></i> por
     <strong>@luizarthur.<a class="text-danger">F</a>ortunato</strong>
    </span>
    <p class="icone" >
     <a href="https://www.linkedin.com/in/arthur-forturnato-643828187/" target="_blank">
     <img src="../../assets/linkedin.png" alt="Linkedin" height="15px" width="15px">
     </a>
     <a class="instagram" href="https://www.instagram.com/luizarthur.fortunato/" target="_blank">
     <img src="../../assets/instagram.png" alt="Instagram" height="15px" width="15px">
     </a>
     <a href="https://github.com/arthurfortunato" target="_blank">
     <img src="../../assets/github.png" alt="GitHub" height="15px" width="35px">
     </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style type="text/css">
.footer {
  grid-area: footer;
  background-color: #FFF;
  color: #282939;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 13px;
  
}

.icone {
  padding: 10px 0px 0px 10px;
}

.instagram {
  padding: 20px 0px 0px 10px;
}

</style>