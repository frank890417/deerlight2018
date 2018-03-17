<template lang="pug">
  .page.page-product.text-left
    section(v-for="p in products",:style="{'background-color': p.color}")
      .container
        .row
          .col-sm-4
            h2 {{p.name }}
            p(v-html="p.description")
            .btns
              span(v-for="btn in p.btns")
                router-link.btn(
                  :class="{transparent: btn.bgcolor=='transparent', white: btn.bgcolor=='white',img: btn.img }",
                  :style="{color: btn.bgcolor=='white'?p.color:'white' }",
                  :to="btn.target||''",
                  v-if="!(linkout(btn.target))") 
                  span {{ btn.label || '&nbsp;&nbsp;'}}
                  img(:src="btn.img")
                a.btn(
                  :class="{transparent: btn.bgcolor=='transparent', white: btn.bgcolor=='white',img: btn.img }",
                  :style="{color: btn.bgcolor=='white'?p.color:'white' }",
                  :href="btn.target||''",
                  target="_blank",
                  v-else)
                  span {{ btn.label || '&nbsp;&nbsp;'}}
                  img(:src="btn.img")
          .col-sm-8.col-cover
            img(:src="p.cover")


</template>

<script>
import {mapState} from 'vuex'

export default {
  data(){
    return {
    }
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    linkout(url){
      return (""+url).indexOf("http")!=-1
    }
  }

}
</script>

<style lang="sass">
@import "../../assets/_mixin.sass"

.page-product
  background-color: #222
  color: white
  h2
    font-size: 48px
    font-weight: 700
    margin-bottom: 48px
  .container
    padding: 100px 20px
  .btn
    padding: 10px 30px
    border: solid 1px white
    border-radius: 3px
    margin-right: 10px

    &.img
      padding: 10px
      
    img
      height: 30px

    // &.white
    //   background-color: white
    //   box-shadow: 0px 0px 10px rgba(black,0.2)
    //   &:hover
    //     background-color: transparent
    //     color: white
    // &:hover
    //   background-color: white

  .col-cover
    display: flex
    justify-content: center
</style>
