<template lang="pug">
.page.page-contact
  section.container-fluid
    .cover(:style="cssbg('/static/聯絡/banner.png')")
  section.container-fluid.section-tab
    .container
      .row
        .col-sm-4  
          span.text-active 一般訊息
        .col-sm-4 委託 / 索取報價
        .col-sm-4 問卷調查
  section.container.text-left.section-form
    .row
      .col-sm-12
        h3 適用於一般留言或是一般交流
        br
        p 我們由衷地感謝你的支持，也期待能夠為你多做些什麼。想與我們聊聊？或者分享你的想法，都可以留言給我們！<br><br>曝鹿設計團隊　敬上
        br
        el-form.form(label-width="70px")
          el-form-item(label="姓名")
            el-input(name="name" placeholder="名字" v-model="contact_form_data.name")
          el-form-item(label="信箱")
            el-input(name="email" placeholder="youtmail@gmail.com" v-model="contact_form_data.mail")
          el-form-item(label="")
            el-checkbox(name="subscribe" v-model="contact_form_data.subscribe") 我願意收到 Deerlight 的優惠訊息
          el-form-item(label="主旨")
            el-input(name="title" placeholder="標題" v-model="contact_form_data.title")
          el-form-item(label="留言")
            el-input(name="content" type="textarea" height="50" placeholder="內文" v-model="contact_form_data.content")
          el-button(@click="send_contact_form") 送出
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      contact_form_data: {
        name: "",
        title: "",
        content: "",
        subscribe: false,
        mail: ""
      }
    }
  },
  methods: {
    send_contact_form(){
      var contactRecord = window.firebase.database().ref('contact_records');
      contactRecord.push(this.contact_form_data).then(() => {
        // var workRef = window.firebase.database().ref('works/'+wid);
        // workRef.remove()
        this.$message({
          type: 'success',
          message: '已收到您的聯繫，我們會盡快回復您!'
        });
        this.contact_form_data =  {
          name: "",
          title: "",
          content: "",
          subscribe: false,
          mail: ""
        }
      })
      
    }
  }
}
</script>

<style lang="sass">
.page-contact
  // padding-top: 120px
  .container-fluid
    padding: 0
  .cover
    width: 100%
    height: 500px
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
  .section-tab
    background-color: #fff
    padding-top: 20px
    padding-bottom: 20px
    border-bottom: solid 1px rgba(black,0.2)
  .section-form
    padding-top: 60px
    width: 490px
    padding-bottom: 60px

</style>
