<script>
export default {
  data() {
    return {
      animals: ['🐖', '🐓', '🐄', '🐑'],
      animal: undefined,
      farm: [],
    };
  },
  computed: {
    today_animals() {
      let arr = [];
      // ADD YOUR CODE HERE
      let i = Math.floor(Math.random() * (this.animals.length));
      arr.push(this.animals[i]);

      let j = 0;
      do {
        j = Math.floor(Math.random() * (this.animals.length));
      } while (i === j);

      arr.push(this.animals[j]);

      // END OF ADDING YOUR CODE HERE
      return arr;
    }
  },
  // ADD YOUR CODE HERE
  methods: {
    addToFarm() {
      
      this.farm.push(this.animal)
    }
  }

  // END OF ADDING YOUR CODE HERE
}
</script>

<template>
  <h2>Today's animals</h2>
  <!-- ADD YOUR CODE HERE -->
  <br/>
  <div v-for="item in today_animals">
    <label>
      <!-- Bind each radio button to the selected animal -->
      <input type="radio" v-model="animal" :value="item" /> {{ item }}
    </label>
  </div>

  <input type="submit" @click.prevent="addToFarm" value="Add to Farm"/>
  <br><br>

  <div v-if="farm.length > 0">
    <p>Your farm is composed by {{ farm.join(" ") }}</p>
  </div>


  <!-- END OF ADDING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
