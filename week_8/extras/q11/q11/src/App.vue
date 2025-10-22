<script>
export default {
  data() {
    return {
      sentence: "We love Bootstrap! We love Vue.js! ",
      colors: ["red", "orange", "green"]
    };
  },
  // ADD YOUR CODE HERE
  computed: {
    words() {
      return this.sentence.trim().split(" ");
    }
  }






  // END OF ADDING YOUR CODE HERE
}
</script>

<template>
  <!-- ADD YOUR CODE HERE -->
  <label>Sentence</label>
  <input type="text" v-model="sentence"/>

  <br/>
  <span v-for="word,index in words ">
    <span :style="{color: colors[index % colors.length], textDecoration: (index % 2 == 1) ? 'underline' : 'none'}">{{ word }}</span>
    &nbsp;
  </span>









  <!-- END OF ADDING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
