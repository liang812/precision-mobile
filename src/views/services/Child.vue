<template>
  <div class="itv-services">
    <div class="itv-services-banner">
      <img src="../../assets/index/banner-child.jpg" alt="banner-child">
    </div>
    <img src="../../assets/child/pic-1.jpg" srcset="../../assets/child/pic-1.jpg 2x" alt="pic-1">
    <img src="../../assets/child/pic-2.jpg" srcset="../../assets/child/pic-2.jpg 2x" alt="pic-2">
    <common-part product-id="2"></common-part>
  </div>
</template>

<script>
  import CommonPart from "../../components/CommonPart.vue";

  export default {
    name: 'ServiceChild',
    components: {CommonPart},
  }
</script>
<style lang="scss"></style>
