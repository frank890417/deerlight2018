<template lang="pug">
  .page.page-index
    .container-fluid.container-slides
      .col-sm-12.slick.animated.fadeIn
        .cover(v-for="slide in slides", :style="cssbg(slide.cover)")
    .container-fluid
      .row.row-info
        router-link.btn-edit(to="/manage" ) 前往編輯
          
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
import $ from 'jquery'
import slick from 'slick-carousel'
export default {
  data () {
    return {
      slides: [],
      currentSlideId: 0,
      slickOptions: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true
          // dots: true
          // Any other options that can be got from plugin documentation
      },
    }
  },
  computed: {
    ...mapState(["works"]),
    currentSlide(){
      return this.slides[this.currentSlideId]
    }
  },
  mounted(){
    this.slides=[
        {
          cover: "/static/首頁/slider-1.png"
        },
        {
          cover: "/static/首頁/slider-2.png"
        },
        {
          cover: "/static/首頁/slider-3.png"
        },
        {
          cover: "/static/首頁/slider-4.png"
        }
      ]
  },
  methods:{

      next() {
          $(".slick").slick("next");
      },

      prev() {
          $(".slick").slick("prev");
      },
  },
  watch:{

    slides(){
      if (this.slides.length>0){
        setTimeout(()=>{
          this.$nextTick(() => {
            $(".slick").slick(
              this.slickOptions
            )
            let _this=this
            $(".slick").on('beforeChange', function(event, slick, currentSlide, nextSlide){
              console.log(nextSlide)
              _this.currentSlideId=nextSlide
            })

          });
        },200)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

@import "../../assets/_mixin.sass"
// .col-info
//   position: fixed
//   left: 50px
//   top: 50px
//   padding: 20px
//   border-right: solid 1px rgba(black,0.08)
  // background-color: #333
.page-index
  .container-slides
    padding: 0
    .col-sm-12
      padding: 0
      margin: 0
  .btn-edit
    position: fixed
    right: 0
    top: 0
    background-color: black
    color: white
    padding: 20px
    z-index: 1000
  .cover
    min-height: 700px
    margin-top: -50px
    margin-bottom: 200px
    background-size: cover
    background-position: center center
  .row-info
    padding: 20px 50px
    display: flex
    justify-content: center
    +rwd_sm
      padding: 20px
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
        // transform: translateY(-5px)
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
