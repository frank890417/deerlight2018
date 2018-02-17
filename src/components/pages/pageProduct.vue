<template lang="pug">
  .page.page-product.text-left
    div(v-for="product in products",:style="{'background-color': product.color}")
      .container
        .row
          .col-sm-4
            h2 {{product.name }}
            p(v-html="product.description")
            .btns
              router-link.btn(v-for="btn in product.btns", 
                    :class="{white: btn.bgcolor=='white' }",
                    :style="{color: btn.bgcolor=='white'?product.color:'white' }",
                    :to="btn.target||''") {{ btn.label || '&nbsp;&nbsp;'}}
          .col-sm-8.col-cover
            img(:src="product.cover")


</template>

<script>
export default {
  data(){
    return {
      products: [
        {
          name: "Dsaving Pro",
          color: "#472b95",
          description: "具有設計感的介面及簡單易懂的體驗，讓記帳不再只是死板的數字，目標也變得更平易近人了。<br><br>陪伴使用者理財規劃，一步一步地完成目標，一起培養駕馭金錢的能力吧！",
          cover: "/static/產品/pic-1.png",
          btns: [
            {
              img: "",
              bgcolor: "white",
              target: "/",
            },{
              label: "more",
              img: "",
              target: "/product/app",
              bgcolor: "transparent"
            }
          ]
        },
        {
          name: "貼圖專區",
          color: "#f5b25b",
          description: "具有設計感的介面及簡單易懂的體驗，讓記帳不再只是死板的數字，目標也變得更平易近人了。<br><br>陪伴使用者理財規劃，一步一步地完成目標，一起培養駕馭金錢的能力吧！",
          cover: "/static/產品/pic-2.png",
          btns: [
            {
              img: "",
              bgcolor: "white",
              target: "/",
            },{
              label: "more",
              img: "",
              target: "/",
              bgcolor: "transparent"
            }
          ]
        },
        {
          name: "福利專區",
          color: "#77a958",
          description: "具有設計感的介面及簡單易懂的體驗，讓記帳不再只是死板的數字，目標也變得更平易近人了。<br><br>陪伴使用者理財規劃，一步一步地完成目標，一起培養駕馭金錢的能力吧！",
          cover: "/static/產品/pic-3.png",
          btns: [
            {
              label: "BUY!",
              img: "",
              bgcolor: "white",
              target: "/",
            },{
              label: "more",
              img: "",
              target: "/",
              bgcolor: "transparent"
            }
          ]
        },
        {
          name: "聖誕賀卡系列",
          color: "#e05852",
          description: "具有設計感的介面及簡單易懂的體驗，讓記帳不再只是死板的數字，目標也變得更平易近人了。<br><br>陪伴使用者理財規劃，一步一步地完成目標，一起培養駕馭金錢的能力吧！",
          cover: "/static/產品/pic-4.png",
          btns: [
            {
              label: "FREE!",
              img: "",
              bgcolor: "white",
              target: "/product/card",
            },{
              label: "more",
              img: "",
              target: "/product/card",
              bgcolor: "transparent"
            }
          ]
        },
        {
          name: "烏拉拉系列",
          color: "#5c98e9",
          description: "具有設計感的介面及簡單易懂的體驗，讓記帳不再只是死板的數字，目標也變得更平易近人了。<br><br>陪伴使用者理財規劃，一步一步地完成目標，一起培養駕馭金錢的能力吧！",
          cover: "/static/產品/pic-5.png",
          btns: [
            {
              label: "BUY!",
              img: "",
              bgcolor: "white",
              target: "/",
            },{
              label: "more",
              img: "",
              target: "/",
              bgcolor: "transparent"
            }
          ]
        }

      ]
    }
  }

}
</script>

<style lang="sass">
.page-product
  background-color: #222
  color: white
  h2
    font-size: 48px
    font-weight: 700
    margin-bottom: 48px
  .container
    padding: 100px 0px
  .btn
    padding: 10px 30px
    border: solid 1px white
    border-radius: 3px
    margin-right: 10px

    &.white
      background-color: white
      box-shadow: 0px 0px 10px rgba(black,0.2)
      &:hover
        background-color: transparent
        color: white
    &:hover
      background-color: white

  .col-cover
    display: flex
    justify-content: center
</style>
