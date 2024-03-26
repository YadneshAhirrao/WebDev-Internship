<template>
  <div class="wrap-container">
    <div class="side-container" :class="{ hide: isVisible }">
      <SideBar />
    </div>
    <div class="show-hide">
      <span>
        <img
          class="show-hide-icon"
          v-if="!isVisible"
          @click="hideShow"
          src="../../assets/arrow-left-circle-fill.png"
          alt=""
        />
        <img
          v-else
          class="show-hide-icon"
          @click="hideShow"
          src="../../assets/arrow-right-circle-fill.png"
          alt=""
        />
      </span>
    </div>

    <div class="main-content">
      <div class="bread-crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Projects</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">NIMBUS Next Gen</a></el-breadcrumb-item
          >
          <el-breadcrumb-item> <a href="/">NNG-1001</a></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="ticket-title">
        <h2>Licence Management</h2>
      </div>
      <div class="btn-ticket">
        <el-button size="mini" type="info" plain
          ><i class="el-icon-paperclip"></i
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../UI/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  data() {
    return { isVisible: false };
  },
  methods: {
    hideShow() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.wrap-container {
  display: flex;
}

.side-container {
  display: flex;
  flex-direction: column;
  width: 240px;
  border-right: 1px solid #091e4224;
  overflow: hidden;
  transition: all 0.2s ease-in;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: calc(100% - 150px);
  padding: 2rem 0.7rem;
}

.show-hide {
  padding-top: 0.4rem;
  padding-left: 0.3rem;
}

.hide {
  width: 15px;
  transition: all 0.2s ease-out;
}

.show-hide-icon {
  transform: translateX(-18px);
}

.ticket-title > h2 {
  font-weight: 700;
  margin-top: 1rem;
  font-size: 24px;
}

.btn-ticket {
  margin-top: 0.8rem;
}
</style>
