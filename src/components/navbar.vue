<template lang="pug">
nav.navbar.navbar-toggleable-md.navbar-default.fixed-top.bg-faded
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

    ul.navbar-nav.ms-auto.mt-2.mt-md-0
      // Authentication Links
      li.nav-item(@click="toggleNav")
        router-link(to="/works") 作品
      li.nav-item(@click="toggleNav")
        router-link(to="/product") 產品
      li.nav-item(@click="toggleNav")
        router-link(to="/about") 關於
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
import {mapState} from 'vuex'
export default {
    props: ['fixed'],
    computed:{
      ...mapState(['scrollTop'])
    },
    methods: {
        toggleNav(){
            $(".navbar-collapse").collapse('hide');
        },
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
  &:before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 8px
    background-image: linear-gradient(to right, #88b4fd 22%, #5278d7)

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
  .navbar-nav
    display: inline-flex
    flex-direction: row
    .nav-item
      margin-right: 50px
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
    li.nav-item a.router-link-active
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
