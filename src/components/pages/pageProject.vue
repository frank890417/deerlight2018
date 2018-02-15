<template lang="pug">
  .page.page-project
    .container-fluid
      .row
        .col-sm-12
          .cover(:style="cssbg(work.coverbg || work.cover)")
            //- router-link.btn-back(to="/") Back
            .yt(v-if="work.video")
              iframe(id="ytplayer" type="text/html" width="800" height="450"
              :src="work.video.replace('watch?v=','embed/').replace('&feature=youtu.be','')+'?showinfo=0'"
              frameborder="0")
      .container.content-area
        //- .row(v-if="work")
          .col-sm-12
        .row
          .col-sm-3.col-content
            ul.text-left.list-label
              li 
                label 類別
              li 
                label 類型
              li 
                label 時間
              li 
                label 客戶
              li(v-if="work.link")
                label Link
                a(:href="work.link", target="_blank") {{work.link}}
          .col-sm-9
            h1 {{work.title}}
            .info.text-left
              span.fas.fa-word
              span  Jhane Chou
              span.fas.fa-clock
              span {{work.date.split(" ")[0]}}
              //- span.fas.fa-heart
              //- span  
            ul.text-left.list-content
              li 
                span(v-for="t in work.cata") {{t}}
              li 
                span(v-for="t in work.type") {{t}}
              li 
                span {{work.date.split("-")[0]}}
              li 
                span {{work.client}}
              li(v-if="work.link")
                label Link
                a(:href="work.link", target="_blank") {{work.link}}
            p.text-left(v-html="processHTML(work.description)")

          .col-sm-12
            p.content.text-left(v-html="processHTML(work.content)")
          //- h3 Project Information
      .row
        .col-sm-12
          h3.more 更多作品
      .row.row-nav
        router-link.col-nav(
          v-for="(proj,projid) in projnav"
          :to="`/project/${projid}`", 
          :style="cssbg(proj.cover)",
          :key="projid")
          h3 {{proj.title}}
          h3.cata {{proj.cata[0]}}

        //- router-link.col-sm-6.col-nav(
        //-   :to="`/project/${projnav.pre.id}`", 
        //-   v-if=" projnav.pre.id",
        //-   :style="cssbg(projnav.pre.work.cover)")
        //-   h3 {{projnav.pre.work.title}}
        
        //- router-link.col-sm-6.col-nav(
        //-   :to="`/project/${projnav.nxt.id}`", 
        //-   v-if="projnav.nxt.id",
        //-   :style="cssbg(projnav.nxt.work.cover)")
        //-   h3 {{projnav.nxt.work.title}}
          
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState(['works']),
    work(){  
      return this.works[this.$route.params.id]
    },
    projnav(){
      return this.works
      // let currentId =  Object.keys(this.works).indexOf(this.$route.params.id)
      // let pre =  Object.keys(this.works)[currentId-1]
      // let nxt =  Object.keys(this.works)[currentId+1]
      // return {
      //   pre: {
      //     id: pre,
      //     work: this.works[pre]
      //   },
      //   nxt:  {
      //     id: nxt,
      //     work: this.works[nxt]
      //   }
      // }
    }
  },
  methods: {
    processHTML(text){
      return (text || "").replace(/\n/g,'<br>')
    },
    cssbg(url) {
      let use_url = (url && url != '') ? url : '/img/default.jpg'
      let result = {
        'background-image': `url("${use_url} ")`
      }
      // console.log(result)
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

.page-project
  // padding-bottom: 20vh
  
  ul
    list-style: none
    padding: 0
    font-size: 16px
    color: #8e8e8e
    li 
      height: 1.88em
    &.list-label
      border-left: solid 4px #8e8e8e
      padding-left: 50px
      margin-top: 200px
    &.list-content
      margin-bottom: 70px
  .info
    color: #8e8e8e
    margin-top: 20px
    margin-bottom: 115px
    margin-top: 0
    span
      margin-right: 36px
      padding-left: 10px
  .tag
    padding: 5px 20px
    background-color: #eee
    border-radius: 50px
  .cover  
    display: flex
    justify-content: center
    align-items: center
  .yt
    position: relative
    box-shadow: 0px 0px 40px rgba(black,0.3)
    top: 100px
    
  .content-area
    padding-top: 50px
  .btn-back
    position: fixed
    left: 0
    top: 0
    background-color: black
    color: white
    padding: 10px
  h1, h2 
    font-weight: normal
  h1
    font-weight: 600
    margin-bottom: 30px
    font-size: 30px
    letter-spacing: 1.5px
    text-align: left

  h3.more
    font-size: 18px
  .cover
    height: 60vh
    max-height: 854px
    background-color: #eee
    background-position: center center
    // background-attachment: fixed
    // margin-top: 30px
    margin-bottom: 50px
    background-size: cover
    margin-left: -30px
    margin-right: -30px
    margin-bottom: 30px
    margin-top: -30px
    animation: coveropen 1s


  .content-area
    img
      // margin-top: 30px
      // margin-bottom: 30px
      width: 100%
      // min-height: 300px
      background-color: #eee

  .content
    margin-top: 100px
    margin-bottom: 280px
  label
    width: 150px
    font-weight: 600


.row-nav
  padding: 0
  margin: -30px
  margin-top: 30px

.col-nav
  cursor: pointer
  background-color: #eee
  background-size: cover
  height: 235px
  width: 20%
  background-position: center center
  color: transparent
  padding: 0
  tranisiton: 0.5s
  display: flex
  justify-content: flex-end
  align-items: flex-start
  flex-direction: column
  padding: 35px 30px

  position: relative
  &>*
    flex: 1
    flex-shrink: 0
    flex-grow: 0
  // margin: -15px
  // width: calc( 100% + 30px )
  &:hover
    text-decoration: none !important
  h3
    position: relative
    z-index: 3
    transition: 0.5s
    text-decoration: none
    font-size: 18px
    width: 100%
    text-align: left
    &.cata
      opacity: 0.5

  &:hover
    color: white
    &:before
      opacity: 0.7

  &:before
    transition: 0.5s
    content: ""
    display: block
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    background-color: rgba(black,1)
    opacity: 0

</style>
