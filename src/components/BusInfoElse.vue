<template>
  <div>
    <Menu></Menu>
    <GoogleMap></GoogleMap>
    <div>
      <div>
        <button>
          <img src="" alt=""><span>返回</span>
        </button>
      </div>
      <div>
        <p>營運業者：<span>統聯客運</span></p>
        <p>聯絡電話：<span>(07)722-9455</span></p>
        <p>官方網站：<span>http://www.ubus.com.tw/html/bus/</span></p>
      </div>
      <div>
        <p>發車時刻表</p>
        <div>高雄車站(中山路)</div>
        <div>瑞豐站(瑞隆路)</div>
        
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
