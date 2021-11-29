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
        <p>100百貨幹線</p>
        <button>
          <img src="" alt="">
        </button>
      </div>
      <div>
        <ul>
          <li>高雄車站(中山路)</li>
          <li>瑞豐站(瑞隆路)</li>
        </ul>
        <div>
          <div>
            <span>末班已過</span>
            <span>1. 瑞豐站(瑞隆路)</span>
            <span></span>
          </div>
          <div>
            <span>進站中</span>
            <span>2. 永豐路口</span>
            <span>
              <img src="" alt=""><span>059-V31</span>
            </span>
            <span></span>
          </div>
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
