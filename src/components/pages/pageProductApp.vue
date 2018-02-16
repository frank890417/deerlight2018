<template lang="pug">
  .page.page-product-app.text-left(:style="{'background-color': product.color,'color': 'white'}")
    section.section-hero.container
      .row
        .col-sm-5.col-info
          h1 {{product.name}}
          p(v-html="product.description")
          .btn 
            img(src='/static/產品/APP類/01_Desaving/google-store-button.svg')
          .btn
            img(src='/static/產品/APP類/01_Desaving/facebook-button.svg')
        .col-sm-7
          img(:src="product.cover")
    section.section-mainfeature.container.text-center
      .row
        .col-sm-12
          h2.eng Dsaving Pro
          h2 三大特點
      .row
        .col-sm-4(v-for="feature in product.mainFeatures", :key="feature.title")
          img(:src="feature.icon")
          h3 {{feature.title}}
          p(v-html="feature.content")
    section.section-about.container
      .row
        .col-sm-6
          img(alt="phones" src="/static/產品/APP類/01_Desaving/pic-3.png")
        .col-sm-6
          h2.eng 專注於你，值得擁有更美好的體驗
          h2 兼顧視覺美感及實用的功能
          p 記帳是一件很美好的事情，我們設計讓人感到舒服的介面，同時兼顧實用的功能。
          ul
            li 更直覺的體驗，更簡單的使用
            li 你可以自己決定想看的面板
            li 你可以更方便地了解自己的習慣
            li 自由度高，你可以自由運用
    section.section-otherfeature.container
      .row.text-center
        .col-sm-12
          h2.eng 為你準備，更多意想不到
          h2 其他特色
      .row.row-feature
        .col-sm-4.col-feature(v-for="feature in product.otherFeatures", :key="feature.title")
          img(alt="icon", :src="feature.icon")
          .info
            h3 {{feature.title}}
            p {{feature.content}}

    section.section-summary.container
      .row
        .col-sm-6
          img.cover(src="/static/產品/APP類/01_Desaving/pic-5.png")
        .col-sm-6.col-info
          h1 {{product.name}}
          p(v-html="product.description")
          .btn 
            img(src='/static/產品/APP類/01_Desaving/google-store-button.svg')
          .btn
            img(src='/static/產品/APP類/01_Desaving/facebook-button.svg')

</template>

<script>
export default {
  data(){
    return {
      product: {
        name: "Dsaving Pro 記帳",
        color: "#472b95",
        description: "具有設計感的介面及簡單易懂的體驗，讓記帳不再只是死板的數字，目標也變得更平易近人了。<br><br>陪伴使用者理財規劃，一步一步地完成目標，一起培養駕馭金錢的能力吧！",
        cover: "/static/作品/5@2x.png",
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
        ],
        mainFeatures: [
          {
            icon: "/static/產品/APP類/01_Desaving/pic-2-1.png",
            title: "財務分析",
            content: "＂有好好地將錢花在刀口上嗎？＂<br>知道花費的痛點，才能明確控制花費"
          },{
            icon: "/static/產品/APP類/01_Desaving/pic-2-2.png",
            title: "設定目標",
            content: "＂沒有目標的記帳，猶如沒有舵的船＂<br>讓目標成為你記帳的動力！"
          },{
            icon: "/static/產品/APP類/01_Desaving/pic-2-3.png",
            title: "更多擴充",
            content: "＂我把所有的財寶都放在這裡了＂<br>剩下的等你來探索！"
          }
        ],
        otherFeatures: [
          {
            icon: "/static/產品/APP類/01_Desaving/icon_管理帳戶.svg",
            title: "管理帳戶",
            content: "你可以為自己設定多個帳戶，控管不同的財務分配。"
          },{
            icon: "/static/產品/APP類/01_Desaving/icon_預算.svg",
            title: "預算",
            content: "可以設定每日的預算開銷，並查看不同日期的預算控制。"
          },{
            icon: "/static/產品/APP類/01_Desaving/icon_通知.svg",
            title: "通知",
            content: "為自己設定通知提醒，不忘記每次的記帳動作。"
          },{
            icon: "/static/產品/APP類/01_Desaving/icon_面板.svg",
            title: "面板",
            content: "依照自己的習慣，自由調配專屬於你的面板。"
          },{
            icon: "/static/產品/APP類/01_Desaving/icon_自訂項目.svg",
            title: "自訂項目",
            content: "無限制的項目增加，因應不同的記帳情境，更清楚、詳細。"
          },{
            icon: "/static/產品/APP類/01_Desaving/icon_循環記帳.svg",
            title: "循環記帳",
            content: "設定循環記帳，不須重複紀錄同樣的記帳項目。"
          }
        ]
      }
    }
  }
}
</script>

<style lang="sass">
.page-product-app
  padding-top: 50px
  .btn
    background-color: #fff
    display: inline-block
    margin-right: 20px
    margin-top: 40px
    img
      width: 160px
      height: 50px
    
  h1
    font-size: 46px
    font-weight: 500
    margin-bottom: 40px
  h2
    font-size: 31px
    letter-spacing: 6px
    opacity: 1
    margin-bottom: 45px

  h2.eng
    font-size: 24px
    letter-spacing: 1.2px
    opacity: 0.5
    margin-bottom: 30px
  h3
    font-size: 24px
  section
    padding-top: 150px
    padding-bottom: 150px
  .container
    max-width: 1200px

  .section-about
    img
      width: 50vw
      position: absolute
      right: 100px
    ul
      margin-top: 60px
      padding: 0
      list-style: none
    
      li
        line-height: 2.2
        &:before
          content: ""
          display: inline-block
          width: 15px
          height: 15px
          background-color: #ff698c
          border-radius: 50%
          margin-right: 30px
  .section-hero
    .col-info
      padding-top: 50px
  .section-mainfeature
    img
      margin-bottom: 44px
    h3
      margin-bottom: 36px
  .section-otherfeature
    h3
      color: #85caff
      font-size: 24px
      margin-bottom: 36px
      letter-spacing: 1.2px
    img
      // flex: 44px
      // flex-grow: 0
      // flex-shrink: 0
      width: 70px
      height: 70px
      margin-top: -20px
    .col-feature
      display: flex
      align-items: flex-start
      margin-bottom: 120px
    .row-feature
      margin-top: 120px
  .section-summary
    .cover
      width: 100%
    .col-info
      margin-top: 150px  
    
</style>
