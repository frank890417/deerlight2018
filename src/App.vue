<template lang="pug">
#app
  transition(name="page" , mode="out-in")
    pageLoading(v-if="loading")
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
    ...mapState(['loading'])
  }
}
</script>

<style lang="sass">

@import url(https://fonts.googleapis.com/earlyaccess/notosanstc.css)

#app
  font-family: 'Noto Sans TC','Avenir', Helvetica, Arial, sans-serif !important
body
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  // color: #2c3e50
  overflow-y: scroll
  // height: auto
  // height: 100vh
  // overflow: hidden
  border: solid 15px white
  background-color: #f8f8f8

h2.sectionTitle
  font-size: 29.4px
  margin-bottom: 74px
  position: relative
  display: inline-block
  font-weight: 900
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
    
p
  font-size: 16px
  line-height: 1.88
  letter-spacing: 0.8px
  // margin-top: 60px

.page-enter-active,.page-leave-active
  transition: 0.3s
  // &:before
  //   display: block
  //   content: ""
  //   width: 100vw
  //   height: 100vh
  //   background-color: #222
  //   position: fixed
  //   top: 100vh
  //   left: 0
  //   transition: 0.5s
  //   transition-timing-function: ease-in
  //   z-index: 100
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
