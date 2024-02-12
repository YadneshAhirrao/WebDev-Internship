<template>
  <img class="wave" src="../assets/wave.png" />
  <div class="container">
    <div class="img">
      <img src="../assets/stock-3.png" />
    </div>
    <div class="login-content">
      <form action="index.html">
        <img src="../assets/logo.png" />
        <h2 class="title">Welcome</h2>
        <div class="input-div one" :class="{ focus: isFocused }">
          <div class="i">
            <i class="fas fa-user"></i>
          </div>
          <div class="div">
            <h5>Username</h5>
            <input
              type="text"
              class="input"
              @focus="this.isFocused = true"
              @blur="this.isFocused = false"
            />
          </div>
        </div>
        <div class="input-div pass" :class="{ focus: isFocused }">
          <div class="i">
            <i class="fas fa-lock"></i>
          </div>
          <div class="div">
            <h5>Password</h5>
            <input
              type="password"
              class="input"
              @focus="this.isFocused = true"
              @blur="this.isFocused = false"
            />
          </div>
        </div>
        <a href="#">Forgot Password?</a>
        <button type="submit" class="btn" value="Login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      isFocused: false,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.wave {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  transform: scale(1.2);
  background-size: cover;
}

.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
}

.img {
  display: flex;
  align-items: center;
}

.login-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.img img {
  width: 500px;
}

form {
  width: 360px;
}

.login-content h2 {
  margin: 15px 0;
  color: #3d3b40;
  text-transform: uppercase;
  font-size: 2.9rem;
}

.login-content img {
  width: 300px;
}
.login-content .input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one {
  margin-top: 0;
}

.i {
  color: #bfcfe7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.i i {
  transition: 0.3s;
}

.input-div div {
  position: relative;
  height: 45px;
}

.input-div div h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: 0.3s;
}

.input-div:before,
.input-div:after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #2d2e8d;
  transition: 0.4s;
}

.input-div.focus:before,
.input-div.focus:after {
  width: 100%;
}

.input-div.focus div h5 {
  top: -5px;
  font-size: 15px;
}

.input-div.focus .i i {
  color: #2d2e8d;
}

.input-div div input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
}

.input-div.pass {
  margin-bottom: 4px;
}

a {
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: 0.3s;
}

a:hover {
  color: #e72726;
}

.btn {
  display: block;
  font-family: inherit;
  font-size: 1.2rem;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #bfcfe7;
  color: #999;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  /* background-position: right; */

  background-color: #2d2e8d;
  color: white;
}

@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }

  .login-content h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .img img {
    width: 400px;
  }

  .wave {
    width: 45%;
  }
}

@media screen and (max-width: 968px) {
  .container {
    grid-template-columns: 1fr;
  }

  .img {
    display: none;
  }

  .wave {
    display: none;
  }

  .login-content {
    justify-content: center;
  }
}
</style>
