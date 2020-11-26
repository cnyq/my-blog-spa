<template>
  <nav class="nav light-default">
    <el-row :gutter="10">
      <el-col :sm="8" :xs="12" class="nav_le">
        <div class="logo">
          <router-link to="/home">
            <span>cnyanqun</span>
          </router-link>
          <svg class="iconfont" aria-hidden="true" @click="choiceThemeState">
            <use :xlink:href="themeState ? '#icon-dark' : '#icon-light'" />
          </svg>
        </div>
      </el-col>
      <el-col :sm="16" :xs="12" class="nav_ri">
        <el-menu
          mode="horizontal"
          :default-active="$route.path"
          class="aside-menu"
          :unique-opened="true"
          :router="true"
        >
          <template v-for="(items, index) in menuList">
            <el-menu-item :index="items.router" :key="index">
              <span slot="title">{{ items.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuList: [
        {
          title: "HOME",
          router: "/home",
        },
        {
          title: "ARCHIVES",
          router: "/archives",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["themeState"]),
  },
  mounted() {},
  methods: {
    choiceThemeState() {
      let setState = this.themeState ? 0 : 1;
      this.$store.dispatch("app/updateThemeState", setState);
    },
  },
};
</script>
<style lang="scss">
// @import '@/assets/styles/themecolor.scss';
.nav {
  height: 60px;
  transition: background-color 0.3s;
  transform: translate3d(0, 0, 0);
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 800;
  letter-spacing: 2px;
  user-select: none;
  .logo {
    font-size: 16px;
    padding-left: 20px;
    text-transform: uppercase;
    a {
      line-height: 60px;
      color: var(--navDefaultAColor);
    }
    .iconfont {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .logo {
    a:hover {
      color: var(--navHoverAColor);
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu {
    background: transparent;
    float: right;
  }
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    color: var(--navDefaultAColor);
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    color: var(--navActiveAColor) !important;
    border-bottom: none;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background: transparent !important;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: var(--navHoverAColor);
  }
}
</style>