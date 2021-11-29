<template>
  <div>
    <Menu></Menu>
    <GoogleMap></GoogleMap>
    <div>
      <div>
        <input type="text" placeholder="輸入地址或關鍵字">
        <img src="../assets/icon_search.png" alt="">
      </div>
    </div>
    <div>
      <div>
        <p>最近站牌</p>
      </div>
      <div>
        <div>
          <p>捷運美麗島站</p><span>北上</span>
        </div>
        <div>
          <p>100百貨幹線、12A、12C(延駛經大坪頂)、12B(去程不繞駛飛機路)、218A、218B、224(原 24B)、52A、69A小港幹線、69B小港幹線(延駛明鳳)、72A、72B(延駛正勤社區)、8001</p>
        </div>
      </div>      

    </div>
    <footer>
      <p>#The F2E 3rd Week3 #Design by breakfast</p>
    </footer>
    
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  name: 'index',
  components: {
    Menu
  },
  data () {
    return {
      menuItem: [
        {title: '公車快找', description: '直接輸入路線名稱獲得資訊！', img: '../assets/search.png', key: menuItem1},
        {title: '查詢站牌', description: '附近站牌 / 公車動態及路線圖', img: '../assets/bus.png', key: menuItem2},
        {title: '推薦公車路線', description: '依起點及目的地搜尋路線', img: '../assets/map.png', key: menuItem3}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
