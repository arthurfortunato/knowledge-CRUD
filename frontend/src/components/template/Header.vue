<template>
  <header class="header">
  <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i> <!-- fonte  -->
  </a>
  <h1 class="title">
    <router-link to="/">{{ title }}</router-link>
  </h1>
  <UserDropDown v-if="!hideUserDropDown" />
  </header>
</template>

<script>
import UserDropDown from './UserDropDown'

export default {
  name: 'Header',
  components: { UserDropDown },
  props: {
    title: String, 
    hideToggle: Boolean,
    hideUserDropDown: Boolean
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style>
  .header {
    grid-area: header;
    background: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
  }

  .title a {
    color: #24292D;
    text-decoration: none;
  }

    .title a:hover {
    color: #000;
    text-decoration: none;
  }

  header.header > a.toggle {
    width: 60px;
    height: 100%;
    color: #24292D;
    justify-self: flex-start;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  header.header > a.toggle:hover {
    background-color: rgb(23, 23, 30, 0.2);
  }
  
</style>