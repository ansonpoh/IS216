<script>
export default {
  name: 'App',
  data() {
    return {
      group: 'HUNTRIX',
      members: [
        {
          id: 1,
          name: 'Rumi',
          role: 'Leader, Vocal',
          img: '/photos/rumi.jpg'
        },
        {
          id: 2,
          name: 'Mira',
          role: 'Rapper',
          img: '/photos/mira.jpg'
        },
        {
          id: 3,
          name: 'Zoey',
          role: 'Dancer',
          img: '/photos/zoey.jpg'
        }
      ]
    }
  }
}
</script>

<template>
  <div id="app">

    <!-- Header Bar goes here -->
    Content goes here

    <div class="main">
      <!-- Member Cards go here -->
    </div>

  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}
</style>
