<template lang="pug">
nav.navbar.navbar-toggleable-md.navbar-default.fixed-top.bg-faded(:class="{nav_show: nav_show}")
  .container
    //- button.navbar-toggler.navbar-toggler-right(type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation")
    //-   span.navbar-toggler-icon
    router-link.navbar-brand(to="/")
      .logowraper
        //- img.logo.white(src="/static/common/navigation-logo-white.svg" alt="")
        img.logo.black(src="/static/common/navigation-logo.svg" alt="")
      .text
        span 曝鹿
        span.text-op 設計工作室
    //- #navbarTogglerDemo02.collapse.navbar-collapse
    
    .icon_bars(@click="nav_open = !nav_open;search_open=false;", :class="{cross: nav_open}")
      .bar
      .bar
      .bar
    .icon_search(@click="search_open = true;nav_open=true;")
      i.fa.fa-search
    ul.navbar-nav(:class="{active: nav_open}")
      // Authentication Links
      li.nav-item(@click="toggleNav")
        router-link(to="/") 首頁
      li.nav-item.range(@click="toggleNav")
        router-link(to="/project") 作品
      li.nav-item.range(@click="toggleNav")
        router-link(to="/product") 產品
      li.nav-item(@click="toggleNav")
        router-link(to="/about") 關於
      li.nav-item(@click="toggleNav")
        router-link(to="/contact") 聯絡
    .navbar-nav.hide(:class="{active: search_open}", @click="toggleNav")
      sectionWorkFilter
     
    //- ul.navbar-nav.mr-auto.mt-2.mt-md-0
    //-   li.nav-item.active
    //-     a.nav-link(href="#")
    //-       | Home 
    //-       span.sr-only (current)
    //-   li.nav-item
    //-     a.nav-link(href="#") Link
    //-   li.nav-item
    //-     a.nav-link.disabled(href="#") Disabled
      //- form.form-inline.my-2.my-lg-0
      //-   input.form-control.mr-sm-2(type="text" placeholder="Search")
      //-   button.btn.btn-outline-success.my-2.my-sm-0(type="submit") Search
          
</template>

<script>
import sectionWorkFilter from "@/components/sectionWorkFilter.vue"
import {mapState} from 'vuex'
import $ from 'jquery'
export default {
    data() {
      return {
        nav_open: false,
        search_open: false,
        last_scrollTop: 0,
        nav_show: true
      }
    },
    props: ['fixed'],
    computed:{
      ...mapState(['scrollTop'])
    },
    methods: {
        toggleNav(){
            this.nav_open=false;
            this.search_open=false;
            $(".navbar-collapse").collapse('hide');
        },
    },
    components: {
      sectionWorkFilter
    },
    watch: {
      scrollTop(){
        let delta = this.scrollTop - this.last_scrollTop
        this.nav_show = delta < 0
        this.last_scrollTop = this.scrollTop
      }
    }
}
</script>

<style lang="sass">
@import "../assets/_mixin.sass"

nav.navbar.navbar-default
  transition: 0.5s
  box-shadow: 0px 0px 10px rgba(black,0.3)
  border-bottom: rgba(white,0)
  padding-top: 5px
  padding-bottom: 5px
  max-width: 100vw
  background-color: white
  z-index: 100
  height: 112px
  box-sizing: border-box
  background-color: #fff
  z-index: 100
  
  margin-top: -112px
  
  &.nav_show
    margin-top: 0px
  +rwd_sm
    padding: 0
    height: 60px
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 8px
    background-image: linear-gradient(to right, #88b4fd 22%, #5278d7)

    +rwd_sm
      display: none
  .container
    max-width: 1600px
    display: flex
    justify-content: space-between
    
            
  .logowraper
    position: relative
    margin-top: 10px
    img
      width: 51px
      height: 77px
      // margin-top: -10px
      transition: 0.5s
      // &.black
      //   position: absolute
      //   transition: 0.5s
      //   opacity: 1
      //   top: 0
      //   left: 0
  .navbar-brand
    display: flex
    text-align: left
    .text
      font-size: 16px
      color: black
      padding-top: 20px
      span
        display: block
      
  .navbar-header,.navbar-nav
    .navbar-toggle
      border: none
      .icon-bar
        height: 3px
        background-color: black
        margin: 5px
    a
      color: black
      transition: 0.5s
      font-size: 16px
      &:hover
        color: black
  .icon_search
    display: none
    cursor: pointer
    +rwd_sm
      display: block
      position: absolute
      right: 60px
      top: 15px
      font-size: 24px
      z-index: 50
  .icon_bars
    width: 24px
    height: 24px
    position: fixed
    right: 20px
    top: 20px
    z-index: 50
    cursor: pointer
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: column
    display: none
    +rwd_sm
      display: block
    
    .bar
      width: 100%
      height: 3px
      background-color: #333
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%,-50%)
      &:nth-child(3)
        transform: translate(-50%,-50%)
        top: 10%
      &:nth-child(1)
        transform: translate(-50%,-50%)
      &:nth-child(2)
        transform: translate(-50%,-50%)
        top: 90%
      +trans
    &.cross
      .bar
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%) rotate(-45deg)
        &:nth-child(2)
          transform: translate(-50%,-50%) rotate(45deg)
      
  .navbar-nav
    display: inline-flex
    flex-direction: row
    &.hide
      display: none
    +rwd_sm
      &.hide
        display: block
      opacity: 0
      display: block
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      background-color: #fff
      pointer-events: none
      padding: 60px
      margin: 0
      a
        font-size: 20px
      +trans
      &.active
        opacity: 1
        pointer-events: initial
    .nav-item
      margin-right: 50px
      +rwd_sm
        margin-right: 0
        text-align: left
        margin-bottom: 40px
    li.nav-item a
      position: relative
      &:before
        content: ""
        display: block
        position: absolute
        bottom: -5px
        left: -10px
        +size(0px,15px)

        background-color: #c1ceee
        mix-blend-mode: multiply
        opacity: 0
        +trans
    li.nav-item a.router-link-exact-active
      &:before
        width: 35px
        opacity: 1
    li.nav-item.range a.router-link-active
      &:before
        width: 35px
        opacity: 1
        
  .dropdown-menu li a
    color: black

// .route_,.route_about,.route_event,.route_blog,.route_speaker,[class^="route_speaker_n_"]
//   nav.navbar.navbar-default

//     &.at_top
//       background-color: transparent
//       padding-top: 15px
//       padding-bottom: 15px
//       box-shadow: 0px 0px 20px transparent
//       img
//         height: 50px
//         margin-top: -10px
//         &.black
//           opacity: 0
//       .navbar-header,.navbar-nav
//         a
//           color: white
//           &.router-link-active
//             color: black

//           &:hover
//             color: black
  
//         .dropdown-menu li a
//           color: black
//         .navbar-toggle
//           .icon-bar
//             background-color: #fff
//       .navbar-nav
//         background-color: black

[class^="route_event"]
  nav.navbar.navbar-default
    &.at_top
      box-shadow: 0px 0px rgba(black,0)
</style>
