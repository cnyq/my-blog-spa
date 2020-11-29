<template>
  <div>
    <Nav :scroll="scroll" :hideNav="hideNav" />
    <Header />
    <Container />
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
    Container(resolve) {
      require(["@/views/components/home/container.vue"], resolve);
    },
  },
  computed: {
    ...mapGetters(["themeState"]),
  },
  created() {},
  methods: {},
};
</script>
