<template lang="pug">
.footer
  footer.container
    .row
      .col-sm-3.col-name
        router-link(to="/")
          img.logo( src="/static/common/footer-logo.svg" alt="")
        div.texts
          span 曝鹿<br>
          span.text-op 設計工作室
      .col-sm-4.col-info
        div
          span 信箱　
          span.text-op imjhanemi@gmail.com<br>
          span 行動
          span.text-op &nbsp;&nbsp; +886 986 878 036
      .col-sm-5
        div.social
          ul.social_icon_list
            li(v-for="s in social", 
               @mouseenter="s.active=true", @mouseleave="s.active=false") 
              a.social_icon(:style="cssbg(s.img+(s.active?'-hover':'-normal')+'.svg')",
                            :href="s.link", target="_blank")
        p.copyright.text-right Copyright © Deerlight Design.

</template>

<script>
export default {
  data(){
    return {
      social: [
        {
          name: "behance",
          img: "/static/common/footer-social-behance",
          link: "https://www.behance.net/deerlightdes",
          active: false
        },{
          name: "dribbble",
          img: "/static/common/footer-social-dribbble",
          link: "http://deerlight.dribbble.com/",
          active: false
        },{
          name: "facebook",
          img: "/static/common/footer-social-facebook",
          link: "https://www.facebook.com/Deerlight.design/",
          active: false
        },{
          name: "googleplay",
          img: "/static/common/footer-social-googleplay",
          link: "https://play.google.com/store/apps/developer?id=Samuel_Hsieh",
          active: false
        },{
          name: "instagram",
          img: "/static/common/footer-social-instagram",
          link: "https://www.instagram.com/deerlight_design/",
          active: false
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.footer
  border-top: solid 1px rgba(black,0.1)
  background-color: white
  text-align: left
  
  .container
    padding: 30px
    padding-top: 40px
    box-sizing: auto
    margin-top: 30px
    max-width: 1600px

  .logo
    width: 50px
    height: 80px
    margin-top: -10px
  .texts
    // display: flex
    // flex-direction: column
    // justify-content: center
    margin-left: 25px
  .col-name,
    display: flex
    
  .col-info,.col-name
    line-height: 2
  .social_icon_list
    padding: 0
    display: flex
    list-style: none
    justify-content: flex-end
  .social_icon
    width: 48px
    height: 48px
    margin-left: 24px
    cursor: pointer
    display: block
  .copyright
    font-size: 12px
    line-height: 3.33
    opacity: 0.5

</style>
