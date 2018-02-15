<template lang="pug">
.page.page-works.text-left
  .container
    .row
      .col-sm-2.col-subnav
        div
          label(:class="{'text-active': filter==''}") 全部
        div
          label 曝鹿概念設計
        br
        div
          label.text-op 依類別
        ul(v-for="f in filter_cata")
          li(@click="filter=f") 
            span(:class="{'text-active': filter==f}") {{f}}
        div
          label.text-op 依風格
        ul(v-for="f in filter_style")
          li(@click="filter=f") 
            span(:class="{'text-active': filter==f}") {{f}}
      .col-sm-10
        .row
          router-link.col-sm-3.col-work.animated.fadeIn(
            v-for="(work,wid) in works",
            :to="`/project/${wid}`", 
            :key="wid")
            .work
              .cover(:style="cssbg(work.cover)")
              h3 {{work.title}}
          

</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      filter: "",
      filter_cata: 
        `品牌,影片 / 平面動態,視覺設計,介面 / 使用者體驗`.split(","),
      filter_style: 
        `插畫,優雅,大膽,平靜,豐富`.split(",")
      
    }
  },
  computed: {
    ...mapState(["works"]),
    filtered_works(){
      return this.works.filter( o=>{
        if (this.filter=="") return true
        return (o.catas)
      })
    }
  },
  methods:{
  }
}

</script>

<style lang="sass">
@import "../../assets/_mixin.sass"

.page-works
  padding-top: 120px
  .col-subnav
    line-height: 2.2
    ul
      padding-left: 0
      margin-left: 0
      list-style: none
    li
      cursor: pointer
      +trans
      span
        padding: 3px 5px
        padding-left: 0
        +trans
      &:hover span
        color: $colorBlue
  .container
    max-width: 1600px
  .col-work
    padding-left: 6px
    padding-right: 6px
    color: black
    margin-bottom: 30px
    &:hover
      text-decoration: none
  .work
    h3
      font-size: 18px
      letter-spacing: 1.3px
      margin-top: 12px
  .cover
    width: 100%
    padding-bottom: 75%
    background-position: center center
    background-size: auto 110%
    transition: 0.5s
    &:hover
      background-size: auto 120%
</style>
