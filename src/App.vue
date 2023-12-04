<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-show="this.$route.meta.iSFooterShow"></Footer>

  </div>
</template>

<script>
import Header from "./components/Header/";
import Footer from "./components/Footer/";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch('categoryList');
  }
}
</script>

<style></style>
