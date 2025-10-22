<script>
export default {
  data() {
    return {
      measurements: {
        Length: {
          "Inch2centimetre": 2.54, "Inch2Yard": 0.0277778, "Inch2Mile": 0.000015783,
          "centimetre2Inch": 0.393701, "centimetre2Yard": 0.0109361, "centimetre2Mile": 0.0000062137,
          "Yard2Inch": 36, "Yard2centimetre": 91.44, "Yard2Mile": 0.000568182
        },
        Volume: { "litre2gallon": 0.219969, "gallon2litre": 4.54609 },
        Digital: { "Byte2Bit": 8, "Bit2Byte": 0.125 },
        Mass: {
          "Ounce2Gram": 28.3495, "Ounce2Pound": 0.0625,
          "Gram2Ounce": 0.035274, "Gram2Pound": 0.00220462,
          "Pound2Ounce": 16, "Pound2Gram": 453.592
        },
      },

      selected_measurement: 'Length',
      unit1: 'Inch',
      unit2: 'centimetre',
      val1: 1,
    };
  },
  // ADD YOUR CODE HERE
  computed: {
    getMeasurements() {
      return Object.keys(this.measurements);
    },

    getUnits() {
      let conversions =  Object.keys(this.measurements[this.selected_measurement]);
      let types = new Set();
      for(let c of conversions) {
        let split = c.split("2");
        types.add(split[0]);
        types.add(split[1]);
      }
      return types;
    },

    val2() {
      let conversion = this.unit1 + "2" + this.unit2;
      let conversionVal = this.measurements[this.selected_measurement][conversion];
      return this.val1 * conversionVal;
    }

  }






  // END OF ADDING YOUR CODE HERE
}
</script>

<template>
  <h4>Convert from One Measurement to Another</h4>
  <!-- ADD YOUR CODE HERE -->
  <br/>
  <select v-model="selected_measurement">
    <option v-for="measurement in getMeasurements">
      {{ measurement }}
    </option>
  </select>

  <br/>
  <input type="number" v-model="val1"/>
  <select v-model="unit1">
    <option v-for="unit in getUnits">
      {{ unit }}
    </option>
  </select>

  <input type="number" disabled v-model="val2"/>

  <select v-model="unit2">
    <option v-for="unit in getUnits">
      {{ unit }}
    </option>
  </select>






  <!-- END OF ADDING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
