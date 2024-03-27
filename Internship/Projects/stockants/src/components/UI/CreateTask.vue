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
      <div class="left-part">
        <div class="bread-crumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"
              >Projects</el-breadcrumb-item
            >
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
            ><i class="fa-solid fa-paperclip fa-lg paperclip-icon"></i>
            Attach</el-button
          >
          <el-button size="mini" type="info" plain
            ><i class="fa-solid fa-copy fa-lg"></i> Create subtask</el-button
          >
          <el-button size="mini" type="info" plain
            ><i class="fa-solid fa-link fa-lg"></i> Link Issue</el-button
          >
          <el-button size="mini" type="info" plain
            ><i class="fa-regular fa-square-check fa-lg"></i> Add
            Checklist</el-button
          >
        </div>

        <div class="discription">
          <p>Description :</p>
        </div>

        <div class="texteditor">
          <Editor
            class="editor"
            model-events="change keydown blur focus paste"
            api-key="s56ww2wz2a1pzunzppdkc2byrc22cgmmj0tk5jtozb5colk4"
            :init="{
              toolbar_mode: 'sliding',
              height: 320,
              plugins:
                'anchor autolink charmap codesample emoticons  link lists searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
              toolbar:
                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link  table mergetags | checklist numlist bullist indent outdent |  align lineheight |  emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
            }"
          />
        </div>

        <div class="btn-save-cancel">
          <el-button size="small" type="primary">Save</el-button>
          <el-button size="small" type="text">Cancel</el-button>
        </div>

        <div class="discription sub-task">
          <p>Subtasks</p>
          <el-progress
            style="width: 40rem"
            :percentage="30"
            :format="format"
          ></el-progress>

          <table class="table-class">
            <tr class="table-content">
              <td>Bug</td>
              <td>NNG-13088</td>
              <td class="task-title">POC for Streamlit integration</td>
              <td class="table-avtar">
                <img
                  src="https://ui-avatars.com/api/?rounded=true&name=SC&background=44546f&color=fff&size=24"
                  alt=""
                />
              </td>

              <td>GROOMED</td>
            </tr>
            <tr class="table-content">
              <td>Bug</td>
              <td>NNG-13088</td>
              <td class="task-title">POC for Streamlit integration</td>
              <td class="table-avtar">
                <img
                  src="https://ui-avatars.com/api/?rounded=true&name=SC&background=44546f&color=fff&size=24"
                  alt=""
                />
              </td>

              <td>GROOMED</td>
            </tr>
            <tr class="table-content">
              <td>Bug</td>
              <td>NNG-13088</td>
              <td class="task-title">
                POC for Streamlit sdfsdfsdfsdf integration
              </td>
              <td class="table-avtar">
                <img
                  src="https://ui-avatars.com/api/?rounded=true&name=SC&background=44546f&color=fff&size=24"
                  alt=""
                />
              </td>

              <td>GROOMED</td>
            </tr>
          </table>
        </div>

        <div class="activity">
          <p>Activity</p>

          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="All" name="second">All</el-tab-pane>
            <el-tab-pane label="Comments" name="first">
              <div>
                <table class="table-class">
                  <tr class="comment-row">
                    <td class="image">
                      <img
                        src="https://ui-avatars.com/api/?rounded=true&name=Y&background=44546f&color=fff&size=32"
                        alt=""
                      />
                    </td>
                    <td>
                      <div class="texteditor">
                        <Editor
                          class="editor"
                          model-events="change keydown blur focus paste"
                          api-key="s56ww2wz2a1pzunzppdkc2byrc22cgmmj0tk5jtozb5colk4"
                          :init="{
                            toolbar_mode: 'sliding',
                            height: 200,
                            plugins:
                              'anchor autolink charmap codesample emoticons  link lists searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                            toolbar:
                              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link  table mergetags | checklist numlist bullist indent outdent |  align lineheight |  emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                          }"
                        />
                      </div>

                      <div class="btn-save-cancel">
                        <el-button size="small" type="primary">Save</el-button>
                        <el-button size="small" type="text">Cancel</el-button>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="History" name="third">History</el-tab-pane>
            <el-tab-pane label="Work Log" name="fourth">Work Log</el-tab-pane>
            <el-tab-pane label="Checklist History" name="fifth"
              >Checklist History</el-tab-pane
            >
          </el-tabs>
        </div>
      </div>
      <div class="right-part">hello</div>
    </div>
  </div>
</template>

<script>
import SideBar from "../UI/SideBar.vue";
import Editor from "@tinymce/tinymce-vue";
export default {
  components: {
    SideBar,
    Editor,
  },
  data() {
    return {
      isVisible: false,
      activeName: "first",
    };
  },
  methods: {
    hideShow() {
      this.isVisible = !this.isVisible;
    },
    format(percentage) {
      return percentage === 100 ? "Done" : `${percentage}%`;
    },
    handleClick(tab, event) {
      console.log(tab, event);
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

.paperclip-icon {
  padding-right: 0.2rem;
}

.discription > p {
  padding-top: 1rem;
  font-weight: 600;
  font-size: 14px;
}

.activity > p {
  padding-top: 2rem;
  font-weight: 600;
  font-size: 14px;
}

.btn-save-cancel {
  padding-top: 0.3rem;
}

.progress {
  display: flex;
}

.table-content > td {
  padding: 0.5rem 0.125rem;
  padding-left: 0.4rem;
  font-size: 14px;
  border-bottom: 1px solid #091e4224;
}

.task-title {
  width: 20rem;
}

.table-avtar {
  margin-left: 3rem;
}

@media (min-width: 1024px) {
  #sample {
    place-items: center;
  }
}

.editor > tox-statusbar {
  display: none;
}

.left-part,
.right-part {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.comment-row > td {
  padding: 0.5rem 0.125rem;
  padding-left: 0.4rem;
}


</style>
