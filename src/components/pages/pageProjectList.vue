<template lang="pug">
.page.page-works.text-left
  .container
    .row
      .col-sm-2(v-if="!mobile")
      div.col-sm-2.col-work-filter(:class='{hide: navHide}')
        sectionWorkFilter
      .col-sm-10
        .row
          router-link.col-sm-6.col-sm-4.col-md-4.col-lg-3.col-work.animated.fadeIn(
            v-for="(item) in filtered_works",
            :to="`/project/${item.id}`", 
            :key="item.work.title",
            :class="{'col-sm-12': mobile}")
            .work
              .cover(:style="cssbg(item.work.cover)")
              h3 {{item.work.title}}
          

</template>

<script>
import { mapState } from 'vuex'
import sectionWorkFilter from '@/components/sectionWorkFilter'
import $ from 'jquery'
export default {
  data () {
    return {
      navHide: false
    }
  },
  computed: {
    ...mapState(["works","filter","mobile",'scrollTop']),
    filtered_works(){
      return Object.keys(this.works)
        .map(o=>({id: o,work:this.works[o]}))
        .filter( o=>o.work.show )
        .filter( o=>{
          // return true
          if (this.filter=="") return true
          return o.work.type.indexOf(this.filter)!=-1 || o.work.cata.indexOf(this.filter)!=-1
        })
    }
  },
  watch: {
    scrollTop(){
      let bt = $(".col-work-filter").offset().top + $(".col-work-filter").outerHeight()
      let ft = $("footer").offset().top -50
      console.log(bt,ft)
      if (bt>ft ){
        this.navHide=true
      }else{
        this.navHide=false
      }
    }
  },
  methods:{
  },
  components:{
    sectionWorkFilter
  }
}

</script>

<style lang="sass">
@import "../../assets/_mixin.sass"

.page-works
  padding-top: 120px
  padding-bottom: 200px

  .col-work-filter
    +range_width(800px)
      position: fixed

  
  +rwd_sm
    padding-top: 60px
  .col-work-filter
    top: calc( 50% + 56px)
    transform: translateY(-50%)
    +trans
    &.hide

      opacity: 0
    +rwd_sm
      display: none
  .curp
    cursor: pointer
  
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
    &:hover,&:active,&:focus
      background-size: auto 120%
</style>
