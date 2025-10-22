<script>
// ADD YOUR CODE HERE
export default {
  data() {
    return {
      img: "/img/kitten.png",
      color: "black",
    }
  }
}






// END OF ADDING YOUR CODE HERE
</script>

<template>
  <!-- MODIFY YOUR CODE HERE -->
  Select background color: 
  <input type="color" v-model="color"/>

  <div class="box m-2 p-4" :style="{'background-color': color}">
    <img class="img-fluid" :src="img">
  </div>
  
  <!-- END OF MODIFYING YOUR CODE HERE -->
</template>

<style scoped>
.box {
  width: 310px;
}
</style>
