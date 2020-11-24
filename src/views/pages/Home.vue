<template>
  <Header />
</template>

<script>
export default {
  name: "home",
  components: {
    Header(resolve) {
      require(['@/views/components/layout/header.vue'], resolve)
    },
  },
};
</script>
