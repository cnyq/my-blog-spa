<template>
  <div class="container homeMain">
    <div class="wrap" v-loading="articleLoading">
      <template v-for="(item, index) in articleList">
        <div class="perview" :key="index">
          <div class="title">
            <span @click="toArticle(item._id)">{{ item.name }}</span>
          </div>
          <div class="synopsis">{{ item.synopsis }}</div>
          <div class="posted">
            Posted {{ item.author }} on
            {{ item.writing_time | filterFormatTime("yyyy年MM月dd日") }}
          </div>
          <div class="tags">
            <span v-for="(tag, index) in item.tag" :key="index">{{
              tag.name
            }}</span>
          </div>
        </div>
      </template>
      <el-pagination
        v-if="total"
        class="myPag"
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="params.pageNum"
        :page-size="params.pageSize"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [],
      params: {
        pageNum: 1,
        pageSize: 10,
      },
      articleLoading: true,
      total: 0,
    };
  },
  mounted() {
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      this.articleLoading = true;
      this.$axios.get("/acticleList", { params: this.params }).then((res) => {
        this.articleList = res.data.list;
        this.total = res.data.total;
        this.articleLoading = false;
      });
    },
    sizeChange(size) {
      this.params.pageSize = size;
      this.getArticleList();
    },
    currentChange(page) {
      this.params.pageNum = page;
      this.getArticleList();
    },
    toArticle(id) {
      this.$router.push({
        name: "article",
        query: {id},
      });
    },
  },
};
</script>
<style lang="scss">
.container {
  background: var(--containerBg);
}
.homeMain {
  padding-bottom: 50px;
  .wrap {
    width: 800px;
    margin: 0 auto;
  }
  .perview {
    padding: 30px 0 20px 0;
    border-top: 1px solid var(--perviewBorderColor);
    &:first-child {
      border-top: none;
    }
    .title {
      font-size: 26px;
      line-height: 1.3;
      margin-bottom: 10px;
      font-weight: 600;
      span {
        color: var(--perviewTitleColor);
        cursor: pointer;
        &:hover {
          color: var(--perviewLinkHover);
        }
      }
    }
    .synopsis {
      color: var(--perviewSynopsisColor);
      font-style: italic;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .posted {
      padding: 10px 0;
      font-size: 18px;
      font-style: italic;
      color: var(--perviewPostedColor);
      margin-bottom: 10px;
    }
    .tags {
      span {
        cursor: pointer;
        display: inline-block;
        border: 1px solid var(--perviewTagsColor);
        border-radius: 999em;
        padding: 0 10px;
        color: var(--perviewTagsColor);
        line-height: 24px;
        font-size: 12px;
        text-decoration: none;
        margin-right: 8px;
        &:hover {
          color: var(--perviewLinkHover);
          border: 1px solid var(--perviewLinkHover);
        }
      }
    }
  }
  .myPag {
    padding-top: 30px;
    text-align: center;
    button:disabled {
      background: transparent;
    }
    .btn-next,
    .el-pagination .btn-prev {
      background: transparent;
    }
    .el-dialog,
    .el-pager li {
      background: transparent;
    }
  }
}
</style>
