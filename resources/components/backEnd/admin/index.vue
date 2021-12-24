<template>
  <div class="row justify-content-center align-items-center vh-100">
    <div class="col-sm-7 col-md-4">
      <div class="card">
        <div class="card-header">
          <span class="card-title fw-bolder">Login</span>
        </div>
        <div class="card-body">
          <div class="input-group input-group-sm mb-2">
            <label class="form-label input-group-text"
              ><i class="fas fa-id-card"></i
            ></label>
            <input
              type="text"
              class="form-control form-control-sm"
              placeholder="User ID" v-model="form.userID" @input="form.userID = $event.target.value.toLowerCase().trim()"
            />
          </div>
          <div class="input-group input-group-sm mt-2">
            <label class="form-label input-group-text"
              ><i class="fas fa-key"></i
            ></label>
            <input
              :type="type"
              class="form-control form-control-sm"
              placeholder="Password" v-model="form.pass"
            />
            <label
              class="form-label input-group-text bg-transparent border-start-0"
              @click.prevent="passToggle"
              ><i
                class="fas"
                :class="type === 'password' ? 'fa-eye-slash' : 'fa-eye'"
              ></i
            ></label>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-center p-0 my-2" v-if="form.userID && form.pass !== '' && form.userID && form.pass !== null">
          <button class="btn btn-success btn-sm shadow-none">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "password",
      form: {
        userID: null,
        pass: null
      },
    };
  },
  methods: {
    passToggle() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>
