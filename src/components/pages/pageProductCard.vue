<template lang="pug">
.page.page-product-card
  section.container-fluid
    .cover(:style="cssbg('/static/產品/一般類/banner.png')")
  section.container.section-card(v-for="(card,cid) in cards", :class="{left: cid%2==0,right: cid%2==1}")
    .row
      .col-sm-6.col-card
        .card_area(:style="{'background-color': card.bg_color}")
      .col-sm-6.col-content
        h2 十二隻腳聖誕賀卡
        p 多元、祝福與愛無國界，意想不到的美妙結合
        br
        p 可將您想要說的話或是心底的秘密將它寫入卡片中，<br>不論是告白或熱戀都很適合喔！<br>快讓收到卡片的他/她充滿驚喜與感動吧！<br><br>/ 尺寸、規格、大小、重量/<br>10.5 x 14.8(A6)，向左掀<br><br>/ 材質 /<br>美編紙…等
        .btn.white {{card.btnlabel}}
  


</template>

<script>
export default {
  data(){
    return {
      cards: [
        {
          title: "十二隻腳聖誕賀卡",
          subtitle: "多元、祝福與愛無國界，意想不到的美妙結合",
          content: "可將您想要說的話或是心底的秘密將它寫入卡片中，<br>不論是告白或熱戀都很適合喔！<br>快讓收到卡片的他/她充滿驚喜與感動吧！<br><br>/ 尺寸、規格、大小、重量/<br>10.5 x 14.8(A6)，向左掀<br><br>/ 材質 /<br>美編紙…等",
          btnlabel: "BUY!",
          bg_color: "#df3b3a"

        },{
          title: "十二隻腳聖誕賀卡",
          subtitle: "多元、祝福與愛無國界，意想不到的美妙結合",
          content: "可將您想要說的話或是心底的秘密將它寫入卡片中，<br>不論是告白或熱戀都很適合喔！<br>快讓收到卡片的他/她充滿驚喜與感動吧！<br><br>/ 尺寸、規格、大小、重量/<br>10.5 x 14.8(A6)，向左掀<br><br>/ 材質 /<br>美編紙…等",
          btnlabel: "BUY!",
          bg_color: "#68ab4c"

        }
      ]
    }
  }
}
</script>

<style lang="sass">

.page-product-card
  // padding-top: 120px

  .container-fluid
    padding: 0
  .cover
    width: 100%
    height: 800px
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    background-position: center center
    background-size: cover
  .section-card
    padding-top: 120px
    padding-bottom: 120px
    text-align: left    
    h2
      letter-spacing: 0.2em
    .card_area
      max-width: 530px
      width: 100%
      max-height: 700px
      height: 100%
    .col-card
      display: flex
      justify-content: center
      align-items: center
    .col-content
      padding-left: 80px
      padding-right: 80px
      
    &.left
    &.right .row
      flex-direction: row-reverse

</style>
