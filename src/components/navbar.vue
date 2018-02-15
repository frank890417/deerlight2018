<template>
  <nav class="navbar navbar-default navbar-fixed" :class="{ 'at_top':scrollTop<=2, 'navbar-fixed-top': fixed }">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <router-link class="navbar-brand" to="/">
                <!-- n3xtcon -->
                <div class="logowraper">
                    <img class="logo white" src="/static/common/navigation-logo.svg" alt="">
                    <img class="logo" src="/static/common/navigation-logo-white.svg" alt="">
                </div>
            </router-link>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <!-- <ul class="nav navbar-nav">
                &nbsp;
            </ul> -->

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                <li @click="toggleNav"><router-link to="/about">About</router-link></li>
                <li @click="toggleNav"><router-link to="/event">Events</router-link></li>
                <li @click="toggleNav"><router-link to="/speaker">Speakers</router-link></li>
                <!-- <li @click="toggleNav"><router-link to="/blog">Blog</router-link></li> -->
                <!-- <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" role="menu">

                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        <li>
                            <a href="/logout"
                                onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="/logout" method="POST" style="display: none;">
                               
                            </form>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </div>
  </nav> 
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

  .container
    max-width: 1600px
  .logowraper
    position: relative

  img
    height: 45px
    margin-top: -10px
    transition: 0.5s
    &.black
      position: absolute
      transition: 0.5s
      opacity: 1
      top: 0
      left: 0
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
    li a
      &:before
        content: ""
        display: block
        +size(4px ,18px)
        transform: translateY(-50%) rotate(0deg)
        background-color: transparent
        position: absolute
        left: 0
        top: 50%
        +trans
    li a.router-link-active
      color: black
      position: relative
      margin-left: 15px
      // margin-right: 5px
      &:before
        transform: translateY(-50%) rotate(20deg)
        background-color: black
        
  .dropdown-menu li a
    color: black

.route_,.route_about,.route_event,.route_blog,.route_speaker,[class^="route_speaker_n_"]
  nav.navbar.navbar-default

    &.at_top
      background-color: transparent
      padding-top: 15px
      padding-bottom: 15px
      box-shadow: 0px 0px 20px transparent
      img
        height: 50px
        margin-top: -10px
        &.black
          opacity: 0
      .navbar-header,.navbar-nav
        a
          color: white
          &.router-link-active
            color: black

          &:hover
            color: black
  
        .dropdown-menu li a
          color: black
        .navbar-toggle
          .icon-bar
            background-color: #fff
      .navbar-nav
        background-color: black

[class^="route_event"]
  nav.navbar.navbar-default
    &.at_top
      box-shadow: 0px 0px rgba(black,0)
</style>
