<script>
export default {
  data() {
    return {
      text: "What if I told you " +
        "Vue can do that",
      limit: 50
    };
  }
}
</script>

<template>
  <!-- MODIFY YOUR CODE HERE -->

  <textarea rows="5">What if I told you Vue can do that</textarea>
  
  <!-- END OF MODIFYING YOUR CODE HERE -->

  {{ text.length }}
</template>

<style scoped>
.warn {
  background-color: mistyrose;
}
</style>
