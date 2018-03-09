<template lang="pug">
.page.page-works.text-left
  .container
    .row
      sectionWorkFilter.col-sm-2
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
import sectionWorkFilter from '@/components/sectionWorkFilter'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(["works","filter"]),
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
  +rwd_sm
    padding-top: 60px
  .col-sm-2
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
