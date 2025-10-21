<script>
export default {
  data() {
    return {
      gameStarted: false,
      buttonSpecialAttack: null,
      prince: "img/prince.png",
      monster: "img/monster.png",
      buttonDetails: [
        {
          action: "attack",
          btnType: "btn-danger",
          value: "ATTACK",
          show: true,
        },
        {
          action: "specialAttack",
          btnType: "btn-warning",
          value: "SPECIAL ATTACK",
          show: true,
        },
        {
          action: "heal",
          btnType: "btn-success",
          value: "HEAL",
          show: true,
        },
        {
          action: "giveUp",
          btnType: "btn-link",
          value: "GIVE UP",
          show: true,
        },
      ],
      myHealth: 100,
      monsterHealth: 100,
      statusList: [
        {
          class: "text-dark",
          text: "Game hasn't started.",
        },
      ],
      MAX_ATTACK: 30,
      MAX_HEAL: 30,
      specialAttackCoolDown: 0,
    };
  },
  // ADD YOUR CODE HERE







  // END OF ADDING YOUR CODE HERE
}
</script>

<template>
  <div class="row pb-3 text-center">
    <div class="col-sm-1">
      <!-- blank -->
    </div>
    <div class="col-sm-3">
      <h2>YOU</h2>
      <img :src="prince" alt="" class="w-50">
      <div class="progress my-progress">
        <div class="progress-bar bg-success" v-bind:style="{ 'width': myHealth + '%' }">
          {{ myHealth }}%
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <!-- blank -->
    </div>
    <div class="col-sm-3">
      <h2>MONSTER</h2>
      <img :src="monster" alt="" class="w-50">
      <div class="progress my-progress">
        <div class="progress-bar bg-success" v-bind:style="{ 'width': monsterHealth + '%' }">
          {{ monsterHealth }}%
        </div>
      </div>
    </div>
    <div class="col-sm-1">
      <!-- blank -->
    </div>
  </div>

  <!-- ADD YOUR CODE HERE -->










  <!-- END OF ADDING YOUR CODE HERE -->

</template>

<style scoped>
/* Optional styling can go here */
</style>
