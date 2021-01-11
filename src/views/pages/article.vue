<template>
  <div v-loading="articleLoading">
    <Nav :scroll="scroll" :hideNav="hideNav" />
    <Header />
    <div class="container"></div>
    <div class="markdown-body" v-html="mdPath"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scrollmixin from "@/components/mixin/scrollmixin";
import showdown from "showdown";
export default {
  name: "home",
  mixins: [scrollmixin],
  data() {
    return {
      articleId: this.$route.query.id,
      articleLoading: true,
      article: {
        mdPath: "",
      },
      myMd: require("@/assets/myMd.md"),
      mdPath:"",
    };
  },
  components: {
    Nav(resolve) {
      require(["@/views/components/layout/nav.vue"], resolve);
    },
    Header(resolve) {
      require(["@/views/components/layout/header.vue"], resolve);
    },
  },
  computed: {
    ...mapGetters(["themeState"]),
  },
  created() {},
  mounted() {
    console.log(this.articleId);
    this.articleLoading = true;
    this.getArticle();
  },
  methods: {
    getArticle() {
      this.$axios
        .get("/acticleInfo", { params: { id: this.articleId } })
        .then((res) => {
          if (res.code == 200) {
            this.articleLoading = false;
            this.article = res.data;
            // let converter = new showdown.Converter();
            // let html = `<a href="${res.data.mdPath}"></a>`;
            // let md = converter.makeMarkdown(html);
            // console.log(converter,html,md)
            // let text = md.toString();
            // this.mdPath = converter.makeHtml(text);
          }
        });
    },
  },
};
</script>
<style lang="scss">
.markdown-body {
  padding: 20px;
  min-width: 200px;
  max-width: 900px;
  font-size: 12px;
  h2 {
    font-size: 18px;
    margin: 1em 0 15px;
    padding-top: 0.8em;
    padding-bottom: 0.8em;
  }
  h3 {
    font-size: 14px;
    margin: 22px 0 16px;
  }
  h4 {
    font-size: 13px;
    margin: 20px 0 16px;
  }
  h5 {
    font-size: 12px;
    margin: 16px 0 16px;
    font-weight: 700;
  }
  p {
    font-size: 12px;
    line-height: 24px;
    color: #666666;
    margin-top: 0px;
    margin: 8px 0;
    margin: 14px 0 14px;
  }
  pre {
    background-color: #eee;
    margin-bottom: 8px;
    margin-top: 8px;
    margin: 12px 0 12px;
  }
  blockquote {
    margin-bottom: 8px;
    margin-top: 8px;
    margin: 14px 0 14px;
    background-color: #eee;
    padding: 16px 16px;
  }
  tr {
    background-color: #f5f5f5;
  }
  code {
    background-color: #eee;
  }
  ul,
  ol,
  li {
    list-style: unset;
    font-size: 12px;
    line-height: 20px;
    color: #666666;
    margin-top: 0px;
    margin: 8px 0;
  }
  blockquote {
    border-color: #48b6e2;
  }
  table {
    display: table;
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>
