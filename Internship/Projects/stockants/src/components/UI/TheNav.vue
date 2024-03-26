<template>
  <div class="menu-list-wrapper">
    <div class="menu-list">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Your Work<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >Action 2</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >Action 3</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >Action 5</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div
      class="menu-list"
      @click="isActiveList"
      @blur="isActiveList"
      :class="{ active: isActive }"
    >
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Projects<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >Action 2</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >Action 3</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >Action 5</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="menu-list">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Filters<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >Action 2</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >Action 3</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >Action 5</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="menu-list">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Dashboard<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >Action 2</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >Action 3</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >Action 5</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="menu-list">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Teams<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >Action 2</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >Action 3</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >Action 5</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="menu-list">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Apps<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >Action 2</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >Action 3</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >Action 5</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="menu-list">
      <el-button class="menu-button" size="small" type="primary"
        >Create</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    isActiveList() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.menu-list-wrapper {
  display: flex;
  font-weight: 500;
  color: #44546f;
}
.menu-list {
  display: block;
  padding: 0.3rem 12px;
  align-self: center;
  font-weight: 500;
}

.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.active {
  border-bottom: 2px solid blue;
}

.menu-button > .menu-button {
  color: white;
}
</style>
