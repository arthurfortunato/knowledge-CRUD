<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
      <hr>
      <div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>
      <input v-if="showSignup" v-model="user.name" type="text" placeholder="Nome">
      <input v-model="user.email" name="email" type="text" placeholder="E-mail">
      <input v-model="user.password" name="password" type="password" placeholder="Senha">
      <input v-if="showSignup" v-model="user.confirmPassword" type="password" placeholder="Confirme a Senha">

      <button v-if="showSignup" @click="signup" >Registrar</button>
      <button v-else @click="signin">Entrar</button>

      <a href @click.prevent="showSignup = !showSignup">
        <span class="span" v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
        <span class="span2" v-else>Não tem cadastro? Registre-se aqui!</span>
      </a>
    </div>
  </div> 
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
  name: "Auth",
  data: function () {
    return {
      showSignup: false,
      user: {},
    };
  },
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then((res) => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    },
    signup() {
      axios
        .post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        })
        .catch(showError);
    },
  },
};
</script>

<style>

.auth-content {
  display: flex;
  height: 100% ;
  justify-content: center;
  align-items: center;
  background: #F3F2F7;
}

.auth-modal {
  background-color: #F3F2F7;
  width: 350px;
  padding: 35px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.3rem;
  font-weight: 100;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #24292D;
}

.auth-modal input {
  border: 1px solid #ffffff;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  outline: none;
}

.auth-modal button {

  background-color: rgb(196, 36, 36);
  color: #FFF;
  padding: 5px 15px;
  border-radius: 20px;
  text-decoration: none;
  outline: none;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 2px;
  background: rgb(255, 255, 255, 0.3);
}

.span {
  color: #24292D;
  font-size: 1.2rem;
}
.span2 {
  color: #24292D;
  font-size: 1.11rem;
}
</style>