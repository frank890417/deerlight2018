<template lang="pug">
.page.page-loading
  img.animated.fadeIn(src="/static/common/footer-logo.svg")
</template>

<script>
export default {

}
</script>

<style lang="sass">
.page-loading

  position: fixed
  left: 0
  top: 0
  width: 100vw
  height: 100vh
  background-color: black
  z-index: 2000
  display: flex
  justify-content: center
  align-items: center
  img
    width: 80%
    max-width: 140px
    position: relative
    z-index: 5
  @keyframes open
    0%
      width: 0

    100%
      width: 100%
  &:before
    content: ""
    height: 100%
    position: absolute
    left: 50%
    top: 0
    transform: translateX(-50%)
    background-color: white
    animation: open 1.5s 1s cubic-bezier(0.215, 0.61, 0.355, 1) both
    
</style>
