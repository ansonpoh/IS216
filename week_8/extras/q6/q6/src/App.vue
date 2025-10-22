<script>
export default {
  data() {
    return {
      num: 0,
      selected: '*'
    };
  },
  // ADD YOUR CODE HERE
  computed: {
    patternOne() {
      return this.selected.repeat(this.num);
    },

    patternTwo() {
      let result = "";
      for(let i = 1; i <= this.num; i++) {
        result += this.selected.repeat(i) + "<br>"
      }
      return result;
    }
  },






  // END OF ADDING YOUR CODE HERE
};
</script>

<template>
  <div>
    <!-- ADD OR MODIFY YOUR CODE HERE -->

    Num: <input type="number" v-model="num" min="0"><br><br>
    Select Symbol:
    Stars: <input name="symbol" type="radio" value="*" v-model="selected">
    Dollars: <input name="symbol" type="radio" value="$" v-model="selected">
    <br><br>
    <h6>Pattern One</h6>
    {{ patternOne }}
    <br><br>
    <h6>Pattern Two</h6>
    <div v-html="patternTwo"></div>
    <!-- END OF ADDING OR MODIFYING YOUR CODE HERE -->
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
