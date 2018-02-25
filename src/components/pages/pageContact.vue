<template lang="pug">
.page.page-contact
  section.container-fluid
    .cover(:style="cssbg('/static/聯絡/banner.png')")
  section.container-fluid.section-tab
    .container
      .row
        .col-sm-4(@click="currentSection='normal'")
          span(:class="{'text-active': currentSection=='normal'}") 一般訊息
        .col-sm-4(@click="currentSection='quote'")
          span(:class="{'text-active': currentSection=='quote'}") 委託 / 索取報價
        .col-sm-4 問卷調查
  transition(name="page",mode="out-in")
    section.container.text-left.section-form(v-if="currentSection=='normal'")
      .row
        .col-sm-12
          h3 適用於一般留言或是一般交流
          br
          p 我們由衷地感謝你的支持，也期待能夠為你多做些什麼。想與我們聊聊？或者分享你的想法，都可以留言給我們！<br><br>曝鹿設計團隊　敬上
          br
          el-form.form(label-width="90px")
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
            el-button.btn.black.float-right(@click="send_contact_form") 送出
    section.container.text-left.section-form.form-quote(v-if="currentSection=='quote'")
      .row
        .col-sm-12
          h3 設計委託或索取報價，可在此作為初步諮詢
          br
          p 如果有任何委託，或其他想進一步了解的部分，都請你不吝來信或利用表單讓我們瞭解你的想法和需求 :)<br><br>曝鹿設計團隊　敬上
          br
          el-form.form(label-width="90px")
            el-form-item(label="姓名")
              el-input(name="name" placeholder="名字" v-model="contact_form_quote_data.name")
            el-form-item(label="信箱")
              el-input(name="email" placeholder="youtmail@gmail.com" v-model="contact_form_quote_data.mail")
            el-form-item(label="")
              el-checkbox(name="subscribe" v-model="contact_form_quote_data.subscribe") 我願意收到 Deerlight 的優惠訊息
            el-form-item(label="主旨")
              el-input(name="title" placeholder="您的需求主旨" v-model="contact_form_quote_data.title")
            el-form-item(label="需求")
              el-input(name="content" type="textarea" height="50" placeholder="需求描述" v-model="contact_form_quote_data.content")
            el-form-item(label="類型")
              el-checkbox-group(v-model="contact_form_quote_data.type")
                div(v-for="type in request_types")
                  el-checkbox(:label="type")
                  br
            el-form-item(label="預算")
              el-select(name="budget" placeholder="預算範圍" v-model="contact_form_quote_data.budget")
                el-option(v-for="type in budget_types", :value="type") {{type}}
              el-checkbox.checkbox-term(v-model="contact_form_quote_data.ref_agree")
                span 索取報價表參考。我了解報價表參考非正式報價，最終報價以正式報價表為準；報價表參考時效為一週，且不得私自或公開使用
            el-button.btn.black.float-right(@click="send_quote_form") 送出
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      currentSection: "normal",
      contact_form_data: {
        name: "",
        title: "",
        content: "",
        subscribe: false,
        mail: ""
      },
      request_types: [
        "設計顧問",
        "品牌設計",
        "影視動畫",
        "介面規劃",
        "視覺設計",
        "其他 (自填)"
      ],
      budget_types: [
        "10,000~15,000 NTD",
        "15,000~30,000 NTD",
        "30,000~50,000 NTD",
        "50,000~100,000 NTD",
        "100,000 NTD 以上"
      ],
      contact_form_quote_data: {
        name: "",
        title: "",
        content: "",
        subscribe: false,
        mail: "",
        type: [],
        budget: "10,000~15,000 NTD",
        ref_agree: false
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
      
    },send_quote_form(){
      var contactRecordQuote = window.firebase.database().ref('contact_records_quote');
      contactRecordQuote.push(this.contact_form_quote_data).then(() => {
        // var workRef = window.firebase.database().ref('works/'+wid);
        // workRef.remove()
        this.$message({
          type: 'success',
          message: '已收到您的聯繫，我們會盡快回復您!'
        });
        this.contact_form_quote_data =  {
          name: "",
          title: "",
          content: "",
          subscribe: false,
          mail: "",
          type: [],
          budget: "10,000~15,000 NTD",
        ref_agree: false
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
    span
      cursor: pointer
  .section-form
    padding-top: 60px
    width: 490px
    padding-bottom: 60px

  .el-select
    width: 100%
  .checkbox-term
    
    &.el-checkbox
      margin-top: 20px
      .el-checkbox__input
        vertical-align: top
        
      .el-checkbox__label
        // margin-top: 30px
        vertical-align: top
        white-space: pre-wrap
        line-height: 1.5
        
        

</style>
