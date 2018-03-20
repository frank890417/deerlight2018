<template lang="pug">
#app
  navbar
  transition(name="page" , mode="out-in")
    pageLoading(v-if="loading")
  .all_pages_area(:class="{nopadding: this.$route.meta.noPaddingTop && !mobile}")
    transition(name="page" , mode="out-in")
      router-view(:key="$route.path")
  section_footer
</template>

<script>
import pageLoading from '@/components/pages/pageLoading'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    pageLoading
  },
  computed: {
    ...mapState(['loading','mobile'])
  }
}
</script>

<style lang="sass">

@import "assets/_mixin.sass"
@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css)
@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900)

#app
  font-family: 'Muli','Noto Sans TC','Avenir', Helvetica, Arial, sans-serif !important
  overflow-x: hidden
.all_pages_area
  min-height: 100vh
  
  padding-top: 112px
  +rwd_sm
    padding-top: 60px
  &.nopadding
    padding-top: 0
    
    +rwd_sm
      padding-top: 0
body
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #2c3e50
  overflow-y: scroll
  // height: auto
  // height: 100vh
  // overflow: hidden
  // padding: 0 !important
  // margin: 0 !important
  // border: solid 15px white
  background-color: #f8f8f8
  font-size: 16px
  font-weight: 500
  
html
  padding: 0 !important
  margin: 0 !important
  background-color: #f8f8f8

h1, h2 
  font-weight: normal

  
h1
  font-weight: 900
  font-size: 60px

.sectionTitle
  font-size: 30px
  margin-bottom: 74px
  position: relative
  display: inline-block
  font-weight: 500
  &:before
    content: ""
    display: block
    position: absolute
    bottom: -5px
    left: -20px
    width: 80px
    height: 20px
    background-color: #c1ceee
    mix-blend-mode: multiply
  +rwd_sm
    font-size: 18px
    font-weight: 700
    &:before
      left: -10px
      width: 50px
      height: 15px
h3
  line-height: 1.5
    
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

p
  font-size: 16px
  line-height: 1.88
  letter-spacing: 0.8px
  // margin-top: 60px

a
  color: $colorBlue

.btn
  // border: solid 1px black
  border-radius: 5px
  padding: 10px 50px
  box-shadow: 0px 5px 15px rgba(black,0.2)
  &:hover
    background-color: #ddd
  &.black
    background-color: black
    color: white
  &.white
    background-color: white
    color: black
    &:hover
      background-color: #fafafa
  &.transparent
    background-color: transparent
    border: solid 1px black
    &:hover
      background-color: rgba(white,0.1)
      color: #eee

  +trans
  &.hover-blue
    &:hover
      background-color: #577edb 
    // color: black
.text-op
  opacity: 0.5
.text-active
  padding: 3px 5px
  color: $colorBlue
  border-bottom: solid 1px $colorBlue




.slick-dots
  display: flex
  list-style: none
  position: absolute
  left: 20%
  bottom: 0px
  padding-left: 0
  transform: translateX(-50%)
  padding: 0
  margin: 0


  button
    border: none
    +size(20px)
    transform: scale(0.5)
    border-radius: 50%
    background-color: #fff
    color: transparent
    font-size: 0
    margin: 2px
    outline: none
    cursor: pointer
    opacity: 0.4
    +trans
    +rwd_md
      transform: scale(0.35)
      margin: -2px


    &:hover
      opacity: 1

  .slick-active button
    opacity: 1
      





.page
  min-height: 100vh
  

.page-enter-active,.page-leave-active
  transition: 0.5s

.page-leave-active
  &:before
    transition-timing-function: ease-out
.page-enter
  opacity: 0
  &:before
    top: 0vh
.page-enter-to
  opacity: 1

  &:before
    top: 100vh

.page-leave
  opacity: 1
  // &:before
  //   top: -100vh
.page-leave-to
  opacity: 0
  // &:before
  //   top: 0

</style>
