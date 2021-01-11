<template>
  <div>
    <Nav />
    <Header />
    <Header />
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Nav(resolve) {
      require(["@/views/components/layout/nav.vue"], resolve);
    },
    Header(resolve) {
      require(["@/views/components/layout/header.vue"], resolve);
    },
  },
};
</script>
