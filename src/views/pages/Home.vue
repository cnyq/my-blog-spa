<template>
  <div>
    <Nav />
    <Header />
    <Header />
    <Header />
    <Header />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "home",
  data() {
    return {
      scroll: 0,
    };
  },
  components: {
    Nav(resolve) {
      require(["@/views/components/layout/nav.vue"], resolve);
    },
    Header(resolve) {
      require(["@/views/components/home/header.vue"], resolve);
    },
  },
  computed: {
    ...mapGetters([
      'themeState'
    ]),
  },
  created() {
    this.listenerScroll();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    listenerScroll(e) {
      document.addEventListener("scroll", this.handleScroll);
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let scrollCount = scrollTop - this.scroll;
      this.scroll = scrollTop;
      if (scrollCount < 0) {
        console.log("up");
      } else {
        console.log("down");
      }
    },
  },
};
</script>
