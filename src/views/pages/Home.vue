<template>
  <div>
    <Nav :scroll="scroll" :hideNav="hideNav" />
    <Header />
    <Header />
    <Header />
    <Header />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scrollmixin from "@/components/mixin/scrollmixin";
export default {
  name: "home",
  mixins: [scrollmixin],
  data() {
    return {};
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
    ...mapGetters(["themeState"]),
  },
  created() {},
  methods: {},
};
</script>
