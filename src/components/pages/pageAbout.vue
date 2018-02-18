<template lang="pug">
.page.page-about
  .container-fluid
    //- .cover(:style="cssbg('/static/關於/banner.png')")
    .cover
      video(src="/static/關於/Facebook cover.mp4" autoplay muted loop)
  .container.container-info.text-left
    .row
      .col-sm-2
        h2 關於
      .col-sm-5 
        h3 致力於品牌設計與概念視覺化
        p 曝鹿設計工作室，展現特殊的品牌風格，並持續的多元發展，曝鹿所執行的每一件專案與產品，都是理性與感性交織而成。<br><br>沒有華而不實的包裝，只呈現最真實且感性的設計。
      .col-sm-5 
        h3 森林的迷霧中散落著光，在鹿角間赤裸裸
        p Deerlight 原指夜晚中的聚光燈照射著鹿，形容為美所震懾，象徵曝鹿令人驚艷的設計。<br><br>Deerlight design studio∣曝鹿設計<br>坦誠相見的專業服務。
      hr
    .row
      .col-sm-2
        h2 關於
      .col-sm-5 
        h3 服務類型
        p ‧設計顧問<br>‧品牌設計<br>‧影視動畫<br>‧介面規劃<br>‧視覺設計
      .col-sm-5
        h3 服務流程（一般設計案件）
        p 1. 初步諮詢 & 需求分析 / 報價<br>2. 確認規格 & 簽訂合約<br>3. 支付訂金即開始進行設計<br>4. 設計提案，選定提案 & 修改定稿<br>5. 定稿並支付尾款<br>6. 交稿結案
      hr
    .row
      .col-sm-2
        h2 成員
      .col-sm-10
        .row.nopadding
          .col-sm-6.col-member(v-for="member in members")
            .member_logo(:style="cssbg(member.logo)")
            h3 {{member.name}}
            h4 {{member.position}}
            p(v-html="member.description")
      hr
    .row.row-client
      .col-sm-2
        h2 合作及客戶
      .col-sm-10
        .row.nopadding
          .col-sm-6.col-client(v-for="client in clients")
            .logo
              img(:src="client.logo")
            .info
              h3 {{client.name}}
              p {{client.description}}
              router-link(to="/works") 代表專案
            
        hr
</template>

<script>
export default {
  data(){
    return {
      members: [
        {
          logo: "/static/關於/pic-1.png",
          name: "周妙音 Jhane Chou",
          position: "創辦人及設計總監",
          description: "出生於 1994 年，擅長視覺設計、介面設計、影像影視製作，現於各司及新創擔任品牌顧問及介面設計師。"
        },
        {
          logo: "/static/關於/pic-2.png",
          name: "謝亞政 Samuel Hsieh",
          position: "共同創辦人及打雜和遊手好閒的APP工程師",
          description: "出生於 1993 年，擅長Android APP 設計、吹豎笛。"
        },
        {
          logo: "/static/關於/pic-3.png",
          name: "謝銘勳 Mingxun Hsieh",
          position: "平面、動態影像設計師",
          description: "出生於 1999 年，因爲繪畫進而對平面設計產生興趣，高二開始獨立接案至今，類型包含動態設計、平面設計、插畫、影音剪輯等。"
        },
        {
          logo: "/static/關於/pic-4.png",
          name: "周宜君 Jhinny Chou",
          position: "設計粗心者",
          description: "設計粗心者，即將越級打怪 la<br>姐姐帶我打怪囉！"
        }
      ],
      clients: [
        {
          logo: "/static/關於/company-1-normal.svg",
          name: "YOSGO　優市股份有限公司",
          description: "以社群為核心的商務模式及用戶為主導的產業生態",
          main: "代表專案"
        },{
          logo: "/static/關於/company-1-normal.svg",
          name: "YOSGO　優市股份有限公司",
          description: "以社群為核心的商務模式及用戶為主導的產業生態",
          main: "代表專案"
        },{
          logo: "/static/關於/company-1-normal.svg",
          name: "YOSGO　優市股份有限公司",
          description: "以社群為核心的商務模式及用戶為主導的產業生態",
          main: "代表專案"
        },{
          logo: "/static/關於/company-1-normal.svg",
          name: "YOSGO　優市股份有限公司",
          description: "以社群為核心的商務模式及用戶為主導的產業生態",
          main: "代表專案"
        }
      ]
    }
    
  }
}
</script>

<style lang="sass">
.page-about
  .container-fluid
    padding: 0
  .container
    max-width: 1200px
  .cover
    width: 100%
    height: 580px
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    video
      width: 100%
    
  h2
    font-size: 34px
    font-weight: 600
    line-height: 1
    letter-spacing: 2.7
  h3
    font-size: 18px
    font-weight: 700
    letter-spacing: 1.3px
    margin-bottom: 25px

  h4
    font-size: 16px
    font-weight: 500
    letter-spacing: 1.2px
    margin-top: -15px
    margin-bottom: 25px
    opacity: 0.6


  p
    font-size: 16px
    letter-spacing: 1.2px
  // hr
  //   width: 100%
  //   height: 1px
  //   background-color: rgba(black,0.2)
    // margin-top: 90px
    // margin-bottom: 90px

  .member_logo
    margin-bottom: 20px
    height: 140px
    background-size: cover
    background-position: center center
  .col-member
    margin-bottom: 80px
  .container-info
    .row
      padding: 100px 0px 
      border-bottom: solid 1px rgba(black,0.2)
      &.nopadding
        padding: 0
        border: none
    .row.row-client
      border-bottom: none
      .logo
        width: 100%
      .col-client
        display: flex
        margin-bottom: 70px
        .logo
          width: 110px
        .info
          padding-left: 20px
          padding-right: 20px
</style>
