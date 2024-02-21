<template>
  <div class="nav-bar">
    <div class="left">
      <div class="logo">
        <a href="#"><img src="../assets/logo.png" alt="" width="150px" /></a>
      </div>
      <div class="lists">
        <div class="dropdown">
          <button>Your Work<i class="fa fa-caret-down"></i></button>
        </div>
        <div class="dropdown">
          <button>Projects<i class="fa fa-caret-down"></i></button>
        </div>
        <div class="dropdown">
          <button>Filters<i class="fa fa-caret-down"></i></button>
        </div>
        <div class="dropdown">
          <button>Dashboards<i class="fa fa-caret-down"></i></button>
        </div>
        <div class="dropdown">
          <button>Teams<i class="fa fa-caret-down"></i></button>
        </div>
        <div class="dropdown">
          <button>App<i class="fa fa-caret-down"></i></button>
        </div>
        <div class="create-btn">
          <button>Create</button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="search-bar">
        <form action="">
          <button type="submit"><i class="fa fa-search"></i></button>
          <input type="text" placeholder="Search.." name="search" />
        </form>
      </div>
      <i class="fa-solid fa-bell"></i>
      <i class="fa-solid fa-circle-question"></i>
      <i class="fa-solid fa-gear"></i>
      <i class="fa-solid fa-user"></i>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  background-color: azure;
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
  flex-direction: row;
}

.lists {
  display: flex;
  align-items: center;
}

.dropdown {
  padding: 0.2rem;
  margin: 0 0.5rem;
}

.dropdown button {
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
  border: none;
  background-color: azure;
}
.dropdown button i{
  padding: 0 0.5rem;

}
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5rem;
}
.right i {
  padding: 0 0.5rem;
  margin: 0 0.5rem;
}

.search-bar form button,
.search-bar form input {
  border: none;
}

.search-bar form {
  border: 1px solid black;
}
</style>
