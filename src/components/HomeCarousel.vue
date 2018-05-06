<template>
  <div class="homeCarousel block">
    <Carousel trigger="click" height="550px"  arrow="never">
      <CarouselItem v-for="(item, index) in data" :key="index">
        <!-- <a :href = "item.url"> -->
          <div class="banner_01" :style="{backgroundImage:`url(${item.imgUrl})`}">
            </div>
        <!-- </a> -->
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui'

export default {
  name: 'HomeCarousel',
  components: {
    Carousel,
    CarouselItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  created() {}
}
</script>
<style lang="less" scoped>
//主页轮播
.block {
  margin-top: 80px;
  position: relative;
  min-width: 1366px;
  .el-carousel {
    width: 100%;
    // height: 797px;
    .el-carousel__item {
      width: 100%;
      height: 100%;
      .banner_01 {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        .banner_conter {
          width: 1366px;
          margin: auto;
          padding-top: 176px;
          .banner_text {
            width: 603px;
            padding-left: 65px;
            .banner_ds {
              font-size: 36px;
              line-height: 61px;
              width: 360px;
              color: #ffffff;
              border-bottom: 1px solid #ffffff;
              border-top: 1px solid #ffffff;
              text-align: center;
            }
            .banner_search {
              width: 240px;
              height: 60px;
              text-align: center;
              line-height: 60px;
              border: 1px solid #ffffff;
              margin-top: 38px;
              color: #ffffff;
              border-radius: 60px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.block.homeCarousel {
  .el-carousel__indicators {
    bottom: 27px;
  }
  .el-carousel__indicator {
    padding: 0;
  }
  .el-carousel__button {
    width: 47px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 4px;
    margin-right: 12px;
    opacity: 1;
  }
  .el-carousel__indicator.is-active button {
   background-color: #45b9f4;
  }
}
</style>

