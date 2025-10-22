<script>
export default {
  data() {
    return {
      exchange_rates: {
        'United States Dollar': 0.72, 'Euro': 0.63, 'Pound sterling': 0.57,
        'Swiss Francs': 0.67, 'Swedish Krona': 6.43, 'Phiippine Peso': 35.62,
        'Malaysian Ringgit': 3.25, 'Indonesian Rupiah': 10615.06, 'Ether': 0.0030,
        'Bitcoin': 0.000077, 'Vietnamese dong': 16748.37, 'Myanmar Kyat': 1003.84
      },
      sing_dollar: 1,
      selected_currency: 'United States Dollar'
    };
  },
  // ADD YOUR CODE HERE
  computed: {
    currencies() {
      return Object.keys(this.exchange_rates);
    },

    exchange() {
      return this.sing_dollar * this.exchange_rates[this.selected_currency];
    }
  }






  // END OF ADDING YOUR CODE HERE
}
</script>

<template>
  <h3>Convert SGD to Other Currency</h3>

  <!-- ADD OR MODIFY YOUR CODE HERE -->

  <div class="p-2">
    Singapore Dollar: <input type="number" min="0" v-model="sing_dollar">
  </div>
  <div class="p-2">
    <select v-model="selected_currency">
      <option v-for="currency in currencies">
        {{ currency }}
      </option>
    </select>
    {{ exchange }}
  </div>

  <!-- END OF ADDING OR MODIFYING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
