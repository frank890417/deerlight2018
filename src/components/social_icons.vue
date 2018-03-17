<template lang="pug">
.social_icons
  ul.social_icon_list
    li(v-for="s in types", 
       v-if="get_link(s.name)"
        @mouseenter="s.active=true", @mouseleave="s.active=false") 
      a.social_icon(:style="cssbg(s.img+(s.active?'-hover':'-normal')+'.svg')",
                    :href="get_link(s.name)", target="_blank")
</template>

<script>
export default {
  props: [ 'social_data' ],
  data(){
    return {
      types: [
        {
          name: "behance",
          img: "/static/common/footer-social-dribbble",
          active: false
        },{
          name: "facebook",
          img: "/static/common/footer-social-facebook",
          active: false
        },{
          name: "googleplay",
          img: "/static/common/footer-social-googleplay",
          active: false
        },{
          name: "instagram",
          img: "/static/common/footer-social-instagram",
          active: false
        },{
          name: "github",
          img: "/static/common/footer-social-github",
          active: false
        },{
          name: "artstation",
          img: "/static/common/footer-social-artstation",
          active: false
        },{
          name: "dribbble",
          img: "/static/common/footer-social-behance",
          active: false
        }
      ]
    }
  },
  computed: {
    social(){
      // return this.data.map(d=>{
      //   let type_item = this.type.filter(t=>t.name==d.name))
      //   return {
          
      //   }
      // })
    }
  },
  methods: {
    get_link(type){
      // let item = this.types.filter(o=>o.type==type)
      if (this.social_data && this.social_data[type]){
        return this.social_data[type]
      }
      return null
    }
  }
}
</script>

<style lang="sass">
.social_icons
  .social_icon_list
    padding: 0
    display: flex
    list-style: none
    justify-content: flex-start
  .social_icon
    width: 48px
    height: 48px
    // margin-left: 24px
    margin-right: 24px
    cursor: pointer
    display: block
</style>
