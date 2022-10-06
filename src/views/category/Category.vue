<template>
  <div>
    <h2>分类</h2>
    <back-top @click.native = "backTop"> </back-top>
  </div>
</template>
<script>
  import { backTopMixin } from 'common/mixin';
export default {
  name: "Category",
  mixins:[backTopMixin],
  data() {
    return {
      scroll: null
    }
  },
  methods:{
  }
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
}
</style>
