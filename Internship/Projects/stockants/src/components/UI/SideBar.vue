<template class="side-pannel">
  <div>
    <div class="table-part">
      <table>
        <tr>
          <td class="table-space" rowspan="2">
            <img class="table-image" src="../../assets/project.png" alt="" />
          </td>
          <td class="table-space"><h4 class="h4">NIMBIUS Next Gen</h4></td>
        </tr>
        <tr>
          <td class="table-space">
            <p class="table-para">Software Project</p>
          </td>
        </tr>
      </table>
    </div>
    <hr />
    <div class="side-menu">
      <span class="menu-span-head">Filters</span>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <span class="menu-span">All Issues</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span class="menu-span">My open issue</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span class="menu-span">Reported by me</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span class="menu-span">Open issues</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span class="menu-span">Done issues</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span class="menu-span">Viewed recently</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span class="menu-span">Resolved recently</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span class="menu-span">Update recently</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>

.h4{
  font-weight: 700;
  
}
.el-menu-vertical-demo {
  height: 73vh;
}

.side-pannel {
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
}
.table-part {
  display: block;
  display: flex;
  padding: 1rem;
}

.side-menu {
  display: flex;
  flex-direction: column;
}

.el-menu-item {
  height: 3rem;
}
.menu-span {
  width: 200px;
}

.table-image {
  width: 30px;
}

.table-para {
  font-size: 12px;
}

.go-back {
  padding-left: 1rem;
  margin-bottom: 0.6rem;
}
.go-back a {
  align-items: baseline;
  padding-left: 0.3rem;
  text-decoration: none;
}

.table-space {
  padding: 0 0.3rem;
}

.menu-span-head {
  padding: 1rem 20px;
  font-weight: 600;
}
</style>
