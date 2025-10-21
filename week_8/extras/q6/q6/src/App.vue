<script>
export default {
  data() {
    return {
      num: 0,
      selected: '*'
    };
  },
  // ADD YOUR CODE HERE







  // END OF ADDING YOUR CODE HERE
};
</script>

<template>
  <div>
    <!-- ADD OR MODIFY YOUR CODE HERE -->

    Num: <input type="number" v-model="num" min="0"><br><br>
    Select Symbol:
    Stars: <input name="symbol" type="radio" value="*">
    Dollars: <input name="symbol" type="radio" value="$">
    <br><br>
    <h6>Pattern One</h6>

    <br><br>
    <h6>Pattern Two</h6>
   
    <!-- END OF ADDING OR MODIFYING YOUR CODE HERE -->
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
