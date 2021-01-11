<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
  },
};
</script>
<style lang="scss">
@import './assets/styles/index.scss';
#app{
  height: 100vh;
  background: var(--bodyBg);
}
</style>