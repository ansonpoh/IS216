<script>
export default {
  data() {
    return {
      showSolution: false
    };
  }
}
</script>

<template>
  <p>They call me fruit.</p>
  <p>They call me fish.</p>
  <p>They call me insect.</p>
  <p>But actually I'm not one of those.</p>
  <p>
    I am a
    <!-- ADD YOUR CODE HERE -->
    <span id="dragon" v-if="showSolution">Dragon</span>
    <button v-else @click="showSolution = true">?</button>





    <!-- END OF ADDING YOUR CODE HERE -->
  </p>
</template>

<style scoped>
/* Optional styling can go here */
</style>
