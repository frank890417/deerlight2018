<template lang="pug">
  .page-index
    .container-fluid
      .row.row-info
        .col-sm-12.col-info.text-left
          h3 曝鹿<br>設計工作室
          hr
          router-link(to="/manage" ) 前往編輯
          
        .col-sm-12
          .cover
        .col-sm-12
          h2.sectionTitle 曝鹿精選
        .col-sm-12
          .row.row-work
            .container
              .row
                router-link.col-xs-3.col-sm-3.col-md-3.col-work.animated.fadeIn(
                    v-for="(work,wid) in works", 
                    :to="`/project/${wid}`", 
                    :key="wid"
                  )
                  .work(:style="cssbg(work.cover)")
                    h5 {{work.title}}
                    .tags
                      .tag(v-for="tag in work.cata") {{tag}}
     
        .col-sm-12
          h2.sectionTitle 作品
        .col-sm-12
          h2.sectionTitle 產品
          

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    ...mapState(["works"])
  },
  methods:{
    cssbg(url) {
      let use_url = (url && url != '') ? url : '/img/default.jpg'
      let result = {
        'background-image': `url("${use_url} ")`
      }
      // console.log(result)
      return result
    }, 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1, h2 
  font-weight: normal
h1
  font-weight: 900
  
h4
  font-size: 20px
  margin-top: 20px

h5
  // color: white
  margin-top: 15px
  font-size: 17.4px
  // margin-bottom: 30px
  opacity: 1
  // border-left: solid 5px white
  // padding-left: 20px
  position: relative
  z-index: 10
  line-height: 1.5
  font-weight: 600
  width: 100%
  color: white
  // &:first-letter
    // font-size: 30px
    // margin-right: 2px

h6
  // color: white
  opacity: 0.5
  letter-spacing: 1px
  float: right
  margin-top: 10px


// .col-info
//   position: fixed
//   left: 50px
//   top: 50px
//   padding: 20px
//   border-right: solid 1px rgba(black,0.08)
  // background-color: #333

  
.row-info
  padding: 20px 50px
  display: flex
  justify-content: center
  // align-items: center
.row-work
  // padding: 20px
  text-align: left
  

.page-index
  // background-color: black
  // color: white
  hr
    border-color: rgba(white,0.2)
  
.head
  border-radius: 50%
  width: 180px
  margin-bottom: 40px
  margin-top: 50px
.container
  max-width: 1400px
.col-work
  // padding: 18px
  color: black
  padding: 0

  &:hover
    text-decoration: none
  .work
    background-color: #eee
    display: block
    // width: 400px
    height: 300px
    border-radius: 3px
    // background-image: url(http://www.monoame.com/projects/proj_selinko/main.jpg)
    background-size: cover
    background-position: center center
    display: flex
    padding: 30px
    // padding-bottom: 75%
    justify-content: flex-end
    align-items: flex-start
    flex-direction: column
    position: relative
    box-shadow: 0px 15px 20px -5px rgba(black,0.2)
    transition-duration: 0.5s
    filter: saturate(0)
    &:hover
      transform: translateY(-5px)
      filter: saturate(100%)
      box-shadow: 0px 20px 20px -5px rgba(black,0.2)
      &:before
        opacity: 0
      .tags,h5
        opacity: 0
    &:before
      content: ''
      display: block

      opacity: 0.5
      background-color: black
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
      transition: 0.5s
      color: white
      display: flex
      justify-content: center
      align-items: center

    .tags,h5
      transition: 0.5s
    h4
      text-decoration: none !important
      color: white
      opacity: 0
      transition: 0.5s
      position: relative
      z-index: 3
    &:hover
      h4
        opacity: 1
  .tags
    display: flex
    position: relative
    color: white
    opacity: 0.5
    margin-top: 0
</style>
