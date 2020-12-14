<template>
  <aside class="menu" v-show="isMenuVisible">
  <a href="/">
  <img src="../../assets/home.png" alt="Home">
  </a>
    <div class="menu-filter">
      <i class="fa fa-search fa-lg"></i>
      <input type="text" placeholder="Digite para filtrar..."
        v-model="treeFilter" class="filter-field">
    </div>
    <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
  </aside>
</template>
 
<script>
import { mapState } from 'vuex'
import Tree from 'liquor-tree'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
  name: "Menu",
  components: { Tree },
  computed: mapState(['isMenuVisible']),
  data: function() {
    return {
      treeFilter: '',
      treeData: this.getTreeData(),
      treeOptions: {
        propertyNames: { 'text': 'name' },
        filter: {
          emptyText: 'Categoria não encontrada' }
      }
    }
  },
  methods: {
    getTreeData() {
      const url = `${baseApiUrl}/categories/tree`
      return axios.get(url).then(res => res.data)
    },
    onNodeSelect(node) {
      this.$router.push({
        name: 'articlesByCategory',
        params: { id: node.id }
      })
      if(this.$mq === 'xs' || this.$mq === 'sm') {
        this.$store.commit('toggleMenu', false)
      }
    }
  },
  mounted() {
    this.$refs.tree.$on('node:selected', this.onNodeSelect)
  }
}
</script>

<style>

.menu {
  grid-area: menu;
  background: #24292D;

  display: flex;
  flex-direction: column;
}

.menu a {
  display: flex;
  align-self: center;
  justify-content: center;
}

.menu img {
  height: 60px;
  width: 35%;
}

.tree-node.selected {
  background-color: #17171E;
}

.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
  background-color: #17171E;
}

.tree-arrow.has-child {
  filter: brightness(2);
}

.menu .menu-filter {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #AAA;
}

.menu .menu-filter i {
  color: #AAA;
  margin-right: 10px;
}

.menu input {
  color: #CCC;
  font-size: 1.1rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}

.tree-filter-empty {
  color: #CCC;
  margin-left: 20px;
  font-size: 1.1rem;
}

.menu span,
.menu span:hover {
    color: #FFF;
    text-decoration: none;
}

div.tree {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}

.menu .tree-node:not(.selected) > .tree-content:hover {
    background: linear-gradient(135deg, #07a7e3 0%, #32dac3 100%);
}
</style>