<template lang="pug">
  .page.page-edit
    .container(v-show="!user")
      h3 請登入管理員帳號
      #firebaseui-auth-container
    .container-fluid(v-if="user")
      .row
        .col-sm-3.col-list.text-left
          ul.breadcrumb
            li.breadcrumb-item
              router-link(to="/") 管理
            li.breadcrumb-item 編輯作品 
              

          
          .btn.btn-primary.form-control(@click="saveAll") SAVE!
          br
          br
          ul.list-group.text-left
            li.list-group-item(v-for="(w,wid) in works", @click="nowId=wid", :class="{active:nowId==wid}")
              .row
                .col-10 {{w.title}} 
                  span {{w.show_index?"✓":""}} {{w.show_index_slide?"(輪)":""}} 
                  //- span(v-if="!w.show") (草稿)
                  span
                    el-switch.float-right(v-model="w.show")
                .col-2
                  .btn.btn-danger.btn-xs(@click="removeItem(wid)") -
            li.list-group-item(@click="addItem") + 新增
          
          .btn.btn-secondary.form-control(onclick="firebase.auth().signOut()") 登出
          br
        .col-sm-9.offset-3(v-if="work", :key="nowId")
          .container-fluid.text-left
            .row
              .col-sm-12
                h2 {{work.title}}
                  router-link.btn.btn-secondary.float-right(:to="'/project/'+nowId", target="_blank") 前往作品
                hr
                //- .btn.btn-primary.pull-right(@click="save") Save
            .row
              .col-sm-4
                el-form(label-width="100px")
                  el-form-item(label="標題")
                    el-input(v-model="work.title")
                  el-form-item(label="版型")
                    el-select(v-model="work.version")
                      el-option(:value="c",:label="c", v-for="c in ['平面類','介面類','影片類']", :key="c")
                  el-form-item(label="首頁顯示✓")
                    el-switch(v-model="work.show_index")
                  el-form-item(label="首頁輪播 (輪)")
                    el-switch(v-model="work.show_index_slide")
                  el-form-item(label="代表顏色")
                    el-color-picker(v-model="work.color")
                  el-form-item(label="作者")
                    el-input(v-model="work.author")
                  el-form-item(label="日期")
                    el-date-picker(v-model="work.date",
                                type="date",
                               value-format="yyyy-MM-dd HH:mm:ss")
                  //- el-form-item(label="年份")
                  //-   el-input(v-model="work.year")
                  el-form-item(label="類別")
                    el-select(v-model="work.cata"
                              multiple
                              filterable
                              allow-create
                              default-first-option
                              placeholder="請選擇Hashtag或建立")
                      el-option(
                        v-for="item in defaut_hashtags"
                        :key="item"
                        :label="item"
                        :value="item")
                  el-form-item(label="作品類型")
                    el-select(v-model="work.type"
                              multiple
                              filterable
                              allow-create
                              default-first-option
                              placeholder="請選擇Hashtag或建立")
                      el-option(
                        v-for="item in defaut_types"
                        :key="item"
                        :label="item"
                        :value="item")
                  el-form-item(label="連結")
                    el-input(v-model="work.link")
                  el-form-item(label="客戶")
                    el-input(v-model="work.client")
                  el-form-item(label="影片")
                    el-input(v-model="work.video")
                  el-form-item(label="封面")
                    el-input(v-model="work.cover")
                    .row
                      .col-sm-3
                        img(v-if="work.cover" :src="work.cover" class="avatar", width="100px")
                      .col-sm-9
                        el-upload(
                          action="string"
                          class="avatar-uploader"
                          :http-request="uploadImage"
                          :show-file-list="false"
                        )
                          i(class="el-icon-plus avatar-uploader-icon")
                  el-form-item(label="封面背景")
                    el-input(v-model="work.coverbg")
                    .row
                      .col-sm-3
                        img(v-if="work.coverbg" :src="work.coverbg" class="avatar", width="100px")
                      .col-sm-9
                        el-upload(
                          action="string"
                          class="avatar-uploader"
                          :http-request="uploadImageBg"
                          :show-file-list="false"
                        )
                          i(class="el-icon-plus avatar-uploader-icon")
              .col-sm-8
                elForm
                  el-form-item(label="描述")
                    el-input(v-model="work.description", type="textarea", :rows="5")
                  el-form-item(label="")
                    VueEditor.ve#content( v-model="work.content" ,
                      :useCustomImageHandler="true",
                      @imageAdded="handleImageAdded" ,
                      style="height: 700px;margin-bottom: 50px")
                    //- el-input(v-model="work.content", type="textarea")

          
</template>

<script>
import { mapState } from 'vuex'
import { VueEditor } from 'vue2-editor'
import Vue from 'vue'

// var firebaseui = require('firebaseui');



export default {
  components: {VueEditor},
  data () {
    return {
      nowId: -1,
      user: null,
      defaut_hashtags: ["品牌","影片 / 平面動態","視覺設計","介面 / 使用者體驗"],
      defaut_types: ["插畫","優雅 / 平靜","大膽" , "豐富", "電商","曝鹿概念設計"]
    }
  },
  mounted(){
    this.nowId = Object.keys(this.works)[0]
    
    let _this = this
    var uiConfig = {
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          _this.user=currentUser
          return false;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      // signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      // tosUrl: '<your-tos-url>'
    };
    setTimeout(()=>{
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          _this.user=user
          console.log(user)
        } else {
          _this.user=null
          // No user is signed in.
        }
      });
      // Initialize the FirebaseUI Widget using Firebase.
      // firebase.auth()
      // console.log( firebase.auth().currentUser)
      ui.start('#firebaseui-auth-container', uiConfig);
      // _this.user = firebase.auth().currentUser

    },0)
  },
  computed:{
    ...mapState(['works']),
    work(){
      if (this.nowId!=-1)
        return this.works[this.nowId]

      return null
    }
  },
  methods: {
    save(){
      var workRef = window.firebase.database().ref('works/' + this.nowId);
      console.log(this.work)

      workRef.set(this.work)
    },
    addItem(){
      var workRef = window.firebase.database().ref('works');
      workRef.push({
        title: "新項目",
        type: [],
        cata: []

      })
      
    },
    removeItem(wid){
      this.$confirm('你確定要刪除專案嗎', '刪除', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var workRef = window.firebase.database().ref('works/'+wid);
        workRef.remove()
        this.$message({
          type: 'success',
          message: '已刪除!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });

      
    },
    saveAll(){
      var worksRef = window.firebase.database().ref('works');
      // console.log(this.work)
      worksRef.set(this.works).then(()=>{

        this.$message('儲存成功！');
      }).catch(()=>{

        this.$message.warning('儲存失敗.. 你確定有權限嗎？');
      })

    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    uploadImage(event){
      var storage = firebase.app().storage("gs://deerlight-studio.appspot.com");
      var storageRef = storage.ref();
      // Child references can also take paths delimited by '/'
      var spaceRef = storageRef.child(`images/${this.work.title}/cover.jpg`);
      // console.log(event.file)
      let _this = this
      spaceRef.put(event.file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
        console.log(snapshot.downloadURL)
        _this.$message('封面上傳成功');
        Vue.set(_this.work,"cover",snapshot.downloadURL)
      });
    }, 
    uploadImageBg(event){
      var storage = firebase.app().storage("gs://deerlight-studio.appspot.com");
      var storageRef = storage.ref();
      // Child references can also take paths delimited by '/'
      var spaceRef = storageRef.child(`images/${this.work.title}/coverbg.jpg`);
      // console.log(event.file)
      let _this = this
      spaceRef.put(event.file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
        console.log(snapshot.downloadURL)
        _this.$message('封面上傳成功');
        Vue.set(_this.work,"coverbg",snapshot.downloadURL)
      });
      
    }, 
    handleImageAdded(file, Editor, cursorLocation) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      // console.log("get picture!")
      // var formData = new FormData();
      // formData.append('file', file)
      // console.log(file)


      var storage = firebase.app().storage("gs://deerlight-studio.appspot.com");
      var storageRef = storage.ref();
      // Child references can also take paths delimited by '/'
      var randomFileName = Math.random().toString(36).substring(2)
      var spaceRef = storageRef.child(`images/${this.work.title}/img/${randomFileName}.jpg`);
      // console.log(event.file)
      let _this = this
      spaceRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
        console.log(snapshot.downloadURL)
        _this.$message('圖片上傳成功');
        Editor.insertEmbed(cursorLocation, 'image', snapshot.downloadURL);
        // _this.work.cover=snapshot.downloadURL
      });

     
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


h1
  font-weight: 900
.page-edit
  padding-top: 50px
  ul.list-group
    max-height: 60vh
    overflow-y: auto

.cover
  height: 400px
  background-color: #eee
  margin-top: 30px
  margin-bottom: 50px
.col-list
  position: fixed
.col-content
  img
    margin-top: 30px
    margin-bottom: 30px
    width: 100%
    min-height: 300px
    background-color: #eee
.list-group-item
  cursor: pointer
</style>
