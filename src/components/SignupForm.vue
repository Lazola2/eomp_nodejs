<template lang="">
  <form action="" class="pt-5">
    <!-- name and surname holder -->
    <div class="name-surname-holder holders d-flex gap-2">
        <input class="firstname form-control" type="text"  placeholder="Name" required>
        <input class="lastname form-control" type="text" placeholder="Surname" required>
    </div>
    
    <!-- id number holder -->
    <div class="id-number-holder holders">
        <input class="id-number form-control" type="text" max="13"  placeholder="Id number" required>
    </div>
    
    <!-- cellphone holder -->
    <div class="cellphone-holder holders">
        <input class="cellphone form-control" type="text"  placeholder="cellphone number" required>
    </div>

    <!-- email holder -->
    <div class="email-holder holders">
        <input class="email form-control" type="email"  placeholder="email" required>
    </div>

    <!-- password holder -->
    <div class="password-holder holders">
        <input class="password form-control" type="password"  placeholder="password" required>
    </div>
    
    <!-- repeat password holder -->
    <div class="repeat-password-holder holders">
        <input class="repeat-password form-control" type="password"  placeholder="repeat password" required>
    </div>

    <!-- profile url holder -->
    <div class="profile-url-holder text-white holders">
        <input class="url-link form-control" type="url"  placeholder="profile image link"> 
    </div>

    <div class="buttons holders d-flex gap-3">
        <button class="btn btn-success w-50">Register</button>
        <button class="btn btn-warning w-50">Sign in</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "signupForm",
};
</script>
<style scoped>
form {
  background-color: rgba(255, 255, 255, 0.553);
  border-radius: 2px;
  height: 75vh;
  width: 25rem;

   /* grid layout*/
   display: grid;
   grid-template-rows: repeat(9, 1fr);
   grid-template-columns: .5fr 7fr .5fr;
}

.name-surname-holder,.id-number-holder, .cellphone-holder, .email-holder,
.password-holder, .repeat-password-holder, .profile-url-holder, .buttons {
    grid-column: 2/3;
} 

.holders {
    padding: .3rem 0;
}

input {
    background: #fff;
}



.form-floating{
    margin: 1rem 1.5rem ;
    width: 90%;
}

.form-floating input:active, .form-floating input:focus {
    background: none;
    outline: none;
    box-shadow: none;
    border-color: var(--theme-color);
}

/* input {
    background: none;
    border-radius: 0;
    border: none;
    border-bottom: 3px solid black
} */

.initials {
    display: flex;
}


</style>
