<template lang="pug">
.page.page-works.text-left
  .container
    .row
      .col-sm-2.col-subnav
        div
          label.curp(@click="filter=''",:class="{'text-active': filter==''}") 全部
        div
          label.curp 曝鹿概念設計
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
            v-for="(item) in filtered_works",
            :to="`/project/${item.id}`", 
            :key="item.work.title")
            .work
              .cover(:style="cssbg(item.work.cover)")
              h3 {{item.work.title}}
          

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
        `插畫,優雅 / 平靜,大膽,豐富`.split(",")
    }
  },
  computed: {
    ...mapState(["works"]),
    filtered_works(){
      return Object.keys(this.works)
        .map(o=>({id: o,work:this.works[o]}))
        .filter( o=>{
          // return true
          if (this.filter=="") return true
          return o.work.type.indexOf(this.filter)!=-1 || o.work.cata.indexOf(this.filter)!=-1
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
  .curp
    cursor: pointer
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
