<template lang="pug">
.col-subnav
  div
    label.curp(@click="setFilter('')",:class="{'text-active': filter==''}") 全部
  div
    label.curp(@click="setFilter('曝鹿概念設計')") 
      span(:class="{'text-active': filter=='曝鹿概念設計'}") 曝鹿概念設計
  br
  div
    label.text-op 依類別
  ul(v-for="f in filter_cata")
    li(@click="setFilter(f)") 
      span(:class="{'text-active': filter==f}") {{f}}
  div
    label.text-op 依風格
  ul(v-for="f in filter_style")
    li(@click="setFilter(f)") 
      span(:class="{'text-active': filter==f}") {{f}}
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "sectionWorkFilter",
  data(){
    return {
      
    }
  },
  methods: {
    ...mapMutations(['setFilter'])
  },
  computed: {
    ...mapState(['filter','filter_cata','filter_style'])
  }
}
</script>

<style lang="sass">
@import "../assets/_mixin.sass"

.col-subnav
  line-height: 2.2
  list-style: none
  text-align: left
  
  ul
    padding-left: 0
    margin-left: 0
    list-style: none
  li
    cursor: pointer
    list-style: none
    +trans
    span
      padding: 3px 5px
      padding-left: 0
      +trans
    &:hover span
      color: $colorBlue
</style>
