<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算:{{ checkLength }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return item.price.slice(1) * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      // return !(this.$store.state.cartList.filter((item) => item.checked).length);
      for (let item of this.$store.state.cartList) {
        if (!item.checked) {
          return false;
        }
      }
      // return !this.$store.state.cartList.find((item) => !item.checked);
      return true;
    },
  },
  methods: {
    checkClick() {
      if(this.ifSelectAll){
        //全部选中
        this.$store.state.cartList.forEach(item=>item.checked = false)
      } else { //部门或全部不选中
        this.$store.state.cartList.forEach(item=>item.checked = true)
      }
    },
    calcClick(){
      if(!this.isSelectAll) {
        this.$toast.methods.show('请选择购买的商品', 2000);
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  position: relative;
  align-items: center;
  background-color: #eee;
}
.check-content {
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
}
.price {
  flex: 1;
  margin-left: 30px;
}
.check-button {
  width: 22px;
  line-height: 20px;
}
.calculate {
  width: 90px;
  height: 100%;
  color: #fff;
  background-color: red;
  text-align: center;
  line-height: 40px;
}
</style>