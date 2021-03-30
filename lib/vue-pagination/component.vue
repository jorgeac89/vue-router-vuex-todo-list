<template src="./view.html"></template>

<script>
export default {
  props: {
    previousLabel: String,
    nextLabel: String,
    breakLabel: String,
    initialPage: Number,
    forcePage: Number,
    pageCount: Number,
    marginPagesDisplayed: Number,
    pageRangeDisplayed: Number,
    onPageChange: Function,
    containerClass: String,
    pageClass: String,
    pageLinkClass: String,
    previousClass: String,
    previousLinkClass: String,
    nextClass: String,
    nextLinkClass: String,
    breakClass: String,
    breakLinkClass: String,
    activeClass: String,
    activeLinkClass: String,
    disabledClass: String
  },
  data: () => ({
    currentPage: 0
  }),
  computed: {
    centerPages: function() {
      if(this.pageCount <= this.pageRangeDisplayed){
        const range = [];
        for (let i = 0; i < this.pageCount; i++) {
          range.push(i);
        }
        return range;
      }else{
        const distanceToCurrentPage = (this.pageRangeDisplayed - 1) / 2;
        let fromPage = this.currentPage - Math.ceil(distanceToCurrentPage);
        if(fromPage < 0){
          const range = [];
          for (let i = 0; i < this.pageRangeDisplayed; i++) {
            range.push(i);
          }
          return range;
        }
        let toPage = this.currentPage + Math.floor(distanceToCurrentPage);
        if(toPage > this.pageCount - 1){
          const range = [];
          for (let i = this.pageCount - this.pageRangeDisplayed; i < this.pageCount; i++) {
            range.push(i);
          }
          return range;
        }
        const range = [];
        for (let i = fromPage; i <= toPage; i++) {
          range.push(i);
        }
        return range;
      }
    },
    leftPages: function() {
      const range = [];
      for (let i = 0;
        i < this.marginPagesDisplayed 
        && i < this.pageCount
        && i < this.centerPages[0];
        i++) {
        range.push(i);
      }
      return range;
    },
    rightPages: function() {
      const range = [];
      for (let i = this.pageCount - this.marginPagesDisplayed;
        i < this.pageCount
        && i >= 0
        && i > this.centerPages[this.centerPages.length - 1];
        i++) {
        range.push(i);
      }
      return range;
    }
  },
  methods: {
    changePage(newPage){
      if(newPage >= 0 && newPage < this.pageCount){
        this.currentPage = newPage;
        if(typeof this.onPageChange === "function"){
          this.onPageChange(newPage);
        }
      }
    }
  },
  created() {
    if(this.forcePage){
      this.currentPage = this.forcePage;
    }else if(this.initialPage){
      this.currentPage = this.initialPage;
    }
  },
  mounted() {
    if(this.forcePage){
      this.currentPage = this.forcePage;
    }
  },
  updated() {
    if(this.forcePage){
      this.currentPage = this.forcePage;
    }
  }
}
</script>