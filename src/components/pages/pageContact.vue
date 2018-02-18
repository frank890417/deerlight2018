<template lang="pug">
.page.page-contact
  .container
    h2 聯絡我們
    el-input(name="name" placeholder="名字" v-model="contact_form_data.name")
    el-input(name="title" placeholder="標題" v-model="contact_form_data.title")
    el-input(name="content" type="textarea" height="50" placeholder="內文" v-model="contact_form_data.content")
    label 訂閱消息
    input(name="subscribe" type="checkbox" v-model="contact_form_data.subscribe")
    el-input(name="email" placeholder="信箱" v-model="contact_form_data.mail")
    button(@click="send_contact_form") 送出表單
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
      axios.post("/sendContactForm",{
        data: this.contact_form_data
      }).then((res)=>{
        console.log(res.data)
      })
    }
  }
}
</script>

<style>

</style>
