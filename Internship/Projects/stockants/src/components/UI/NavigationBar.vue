<template>
  <div>
    <header>
      <div class="nav-wrapper">
        <div class="head-container">
          <div class="logo">
            <a href="#"> <img src="../../assets/logo.png" alt="" /></a>
          </div>
          <div class="content-1">
            <nav class="navbar-menu menu">
              <the-nav></the-nav>
            </nav>
          </div>

          <div class="content-2">
            <div class="menu-list">
              <el-input placeholder="Search" v-model="input4" size="small">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>

            <div class="menu-list">
              <el-badge :value="2" class="item">
                <i class="el-icon-message-solid"></i>
              </el-badge>
            </div>

            <div class="menu-list">
              <i class="el-icon-question" size="medium"></i>
            </div>

            <div class="menu-list">
              <i class="el-icon-s-tools"></i>
            </div>

            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-avatar
                  size="small"
                  src="https://ui-avatars.com/api/?rounded=true&name=Y&background=44546f&color=fff&size=32"
                />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="clearfix">
                    View Profile
                  </el-dropdown-item>
                  <el-dropdown-item class="clearfix"> Logout </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import TheNav from "./TheNav.vue";
export default {
  components: {
    TheNav,
  },
};
</script>

<style scoped>
.nav-wrapper {
  padding: 0.4rem 12px 0.4rem 32px;
  border-bottom: 1px solid #091e4224;
  background-color: rgba(255, 255, 255, 0.627);
  color: #44546f;
  font-weight: 500;
}

.head-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.logo > a > img {
  /* height: 28px; */
  width: 140px;
  margin-right: 4rem;
  margin-top: 0.125rem;
}

.content-1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
}

.navbar-menu {
  display: flex;
}

.content-2 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
}
.menu-list {
  display: block;
  padding: 0.3rem 12px;
  align-self: center;
  cursor: pointer;
}
</style>
