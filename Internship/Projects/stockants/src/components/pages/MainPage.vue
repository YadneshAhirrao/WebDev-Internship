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
        </el-breadcrumb>
      </div>

      <div class="title-drop-menu">
        <div class="title-dropdown-menu">
          <div class="title">
            <h2>Issues</h2>
          </div>

          <div class="dropdown-menu">
            <div class="drop-menu-class">
              <el-dropdown>
                <el-button size="mini">
                  Share<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <div class="drop-menu-class">
              <el-dropdown>
                <el-button size="mini">
                  Export Issue<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <div class="drop-menu-class">
              <el-button size="mini"> Go to All Issue </el-button>
            </div>

            <div class="drop-menu-class">
              <el-dropdown>
                <el-button size="mini">
                  LIST VIEW<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <div class="drop-menu-class">
              <el-dropdown>
                <el-button size="mini">
                  DETAIL VIEW<i class="el-icon-s-fold el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <div class="drop-menu-class">
              <el-button size="mini"><i class="el-icon-more" /></el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="filters">
        <div class="search-input">
          <el-input
            size="mini"
            placeholder="Search issues"
            suffix-icon="el-icon-search"
            v-model="input1"
          >
          </el-input>
        </div>
        <div class="project-filter">
          <el-select
            size="mini"
            v-model="value"
            multiple
            filterable
            collapse-tags
            placeholder="Project"
            style="max-width: 200px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="project-filter">
          <el-select
            size="mini"
            v-model="value"
            multiple
            collapse-tags
            filterable
            placeholder="Type"
            style="max-width: 150px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="project-filter">
          <el-select
            size="mini"
            v-model="value"
            multiple
            collapse-tags
            filterable
            placeholder="Status"
            style="max-width: 150px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="project-filter">
          <el-select
            size="mini"
            v-model="value"
            multiple
            collapse-tags
            filterable
            placeholder="Assignee"
            style="max-width: 150px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="more-button">
          <el-button size="mini"
            >More<i class="el-icon-plus el-icon--right"
          /></el-button>
        </div>

        <div class="reset-button">
          <el-button size="mini">Reset</el-button>
        </div>
      </div>

      <div>
        <DataTable />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../UI/SideBar.vue";
import DataTable from "../table/DataTable.vue";
export default {
  components: {
    SideBar,
    DataTable,
  },
  data() {
    return {
      isVisible: false,
      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      value: [],
    };
  },
  methods: {
    hideShow() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.title > h2 {
  font-weight: 600;
  font-size: 1.71rem;
}
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

.bread-crumb {
  height: 30px;
}
.title-dropdown-menu {
  display: flex;
  justify-content: space-between;
}

.dropdown-menu {
  display: flex;
}

.drop-menu-class {
  padding: 0 0.4rem;
}

.filters {
  display: flex;
  margin-top: 1rem;
}

.project-filter {
  margin-left: 0.7rem;
}

.more-button {
  padding-right: 0.7rem;
  border-right: 1px solid rgba(139, 138, 138, 0.603);
  margin-left: 9px;
}

.main-table {
  padding-top: 1rem;
}

.show-hide {
  padding-top: 0.4rem;
  padding-left: 0.3rem;
}

.hide {
  width: 0;
  transition: all 0.2s ease-out;
}

.show-hide-icon {
  transform: translateX(-18px);
}

.reset-button {
  margin-left: 0.9rem;
}
</style>
