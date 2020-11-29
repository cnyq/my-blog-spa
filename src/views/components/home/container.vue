<template>
  <div class="container">
    <div class="wrap">
      <template v-for="(item, index) in 6">
        <div class="perview" :key="index">
          <div class="title">This is MD</div>
          <div class="synopsis">描述文件</div>
          <div class="posted">Posted yanqun on 2020-04-17</div>
          <div class="tags">
            <span>md</span>
            <span>微信小程序</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style lang="scss">
.container {
  background: var(--containerBg);
}
.wrap {
  width: 1200px;
  margin: 0 auto;
}
.perview {
  padding: 30px 0 20px 0;
  border-bottom: 1px solid var(--perviewBorderColor);
  &:last-child{
    border-bottom: none;
  }
  .title {
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--perviewTitleColor);
    cursor: pointer;
    &:hover{
      color: var(--perviewLinkHover);
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
      &:hover{
        color: var(--perviewLinkHover);
        border: 1px solid var(--perviewLinkHover);
      }
    }
  }
}
</style>