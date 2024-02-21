<template>
  <div class="nav-bar">
    <div class="left">
      <div class="logo">
        <a href="#"><img src="../assets/logo.png" alt="" width="150px" /></a>
      </div>
      <div class="lists">
        <el-col :span="8">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              Dropdown List<el-icon class="el-icon--right"
                ><arrow-down
              /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
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

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from "@element-plus/icons-vue";
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>