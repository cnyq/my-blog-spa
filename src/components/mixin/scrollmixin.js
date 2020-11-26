export default{
  data() {
    return {
      scroll: 0,
      hideNav: false
    }
  },
  created() {
    this.listenerScroll();
  },
  beforeDestroy() {
    this.scroll = 0
    this.hideNav = false
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
        this.hideNav = false
      } else {
        console.log("down")
        this.hideNav = true
      }
    },
  }
}