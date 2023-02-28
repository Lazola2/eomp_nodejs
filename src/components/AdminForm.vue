<template lang="">
  <form action="">
    <div class="usericon">
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="forgot">
      <a href="">Forgot password?</a>
    </div>
    <div class="login">
        <button class="btn-login">Log in</button> 
    </div>
  </form>
</template>
<script>
export default {
    name: 'adminForm'
};
</script>
<style scoped>
form {
    background-color: rgba(255, 255, 255, 0.553);
    border-radius: 1rem;
    height: 65vh;
    width: 27rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
}
.usericon {
    width: 10rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.usericon i {
    scale: 5;
    color: var(--theme-color);
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

input {
    background: none;
    border-radius: 0;
    border: none;
    border-bottom: 3px solid black
}

.forgot, .login {
    margin: 1rem 1.5rem;
}

.btn-login {
    padding: 0.25rem 1rem;
    background: none;
    border: 2px solid black;
    color: black;
    border-radius: 0.3rem;
}

.btn-login:hover {
    animation: btnHover 0.4s ease-in-out forwards;
}

@keyframes btnHover {
    0% {
        scale: 1;
    }
    
    80% {
        scale: 1.1;
        border-color: var(--theme-color);
        color: var(--theme-color);
    }
    100% {
        scale: 1.08;
        border-color: var(--theme-color);
        color: var(--theme-color);
    }
}
</style>
