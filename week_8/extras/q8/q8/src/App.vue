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
      val1: 1
    };
  },
  // ADD YOUR CODE HERE







  // END OF ADDING YOUR CODE HERE
}
</script>

<template>
  <h4>Convert from One Measurement to Another</h4>
  <!-- ADD YOUR CODE HERE -->







  <!-- END OF ADDING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
