<script>
export default {
  data() {
    return {
      users: [{ "user": "Jack", "pwd": "abc" },
      { "user": "Mary", "pwd": "def" },
      { "user": "John", "pwd": "123" },
      { "user": "Cherry", "pwd": "456" }
      ],
      // ADD YOUR CODE HERE
      username: "",
      cur_pwd: "",
      pwd1: "",
      pwd2: "",
      error: "",
      show: false,




      // END OF ADDING YOUR CODE HERE
    };
  },
  methods: {

    validate() {
      // ADD YOUR CODE HERE
      if(!this.username || !this.cur_pwd || !this.pwd1 || !this.pwd2) {
        this.error = "All inputs must be filled!";
        this.show = true;
        return;
      }

      if(this.pwd1 !== this.pwd2) {
        this.error = "New passwords do not match!"
        this.show = true;
        return;
      }

      const user = this.users.find(user => user.user === this.username);
      if(!user) {
        this.error = "Username does not exist!";
        this.show = true;
        return;
      }

      const password = this.users.find(user => user.pwd === this.cur_pwd);
      if(!password) {
        this.error = "Current password is incorrect!";
        this.show = true;
        return;
      }
      
      this.show = false;
      // END OF ADDING YOUR CODE HERE
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" class="form-control" id="user" v-model="username" placeholder="Enter Name">
  </div>

  <div class="mb-3">
    <label for="cur_pwd" class="form-label">Current Password</label>
    <input type="password" class="form-control" id="cur_pwd" v-model="cur_pwd" placeholder="Password">
  </div>

  <div class="mb-3">
    <label for="pwd1" class="form-label">New Password</label>
    <input type="password" class="form-control" id="pwd1" v-model="pwd1" placeholder="Password">
  </div>

  <div class="mb-3">
    <label for="pwd2" class="form-label">Confirm New Password</label>
    <input type="password" class="form-control" id="pwd2" v-model="pwd2" placeholder="Confirm Password">
  </div>

  <button @click="validate" class="btn btn-primary">Submit</button>
  <br><br>

  <!-- MODIFY YOUR CODE HERE -->
  <div class="alert alert-warning" role="alert" v-if="show">{{ error }}</div>
  <!-- <div class="alert alert-warning" role="alert">If there are validation errors, display error message here. Otherwise,
    hide this.</div> -->
  <!-- END OF MODIFYING YOUR CODE HERE -->
</template>

<style scoped>
/* Optional styling can go here */
</style>
