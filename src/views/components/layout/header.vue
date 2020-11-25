<template>
  <el-header height="60px" class="header">
    <el-row :gutter="10">
      <el-col :sm="8" :xs="12" class="header_le">
        <div class="logo mid">logo</div>
      </el-col>
      <el-col :sm="16" :xs="12" class="header_ri">
        <div class="menu mid"></div>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log('aaa')
    this.$axios
      .get("list")
      .then(res => {
        console.log(res)
      });
  },
};
</script>
<style lang="scss">
.header {
  background: yellowgreen;
  div {
    height: 100%;
  }
  .header_le,
  .header_ri {
    display: table;
    .mid {
      display: table-cell;
      vertical-align: middle;
    }
  }
}
</style>