<template>
  <div>
    <Header></Header>
    <GoogleMap></GoogleMap>
    <div>
      <div>
        <select name="" id="">
          <option value="">高雄市</option>
        </select>
      </div>
      <div>
        <div>
          <img src="../assets/icon_start.png" alt="">
          <img src="../assets/icon_line.png" alt="">
          <img src="../assets/icon_end.png" alt="">
        </div>
        <div>
          <button>
            <img src="" alt="">
          </button>
          <div>
            <input type="" name="" value="請輸入出發地關鍵字">
            <button><img src="../assets/icon_search.png" alt=""></button>
          </div>
          <div>
            <input type="" name="" value="請輸入目的地關鍵字">
            <button><img src="../assets/icon_search.png" alt=""></button>
          </div>
          <div>
            <select name="" id="">
              <option value="">立即出發</option>
              <option value="">抵達時間</option>
            </select>
          </div>
          <div>
            <time datetime=""></time>
          </div>
          <div>
            <input type="" name="" value="">
            <label for="">僅顯示提供無障礙的公車路線</label>
          </div>
        </div>
        <div>
          <button>開始搜尋</button>
        </div>
      </div>
    </div>
    <footer>
      <p>#The F2E 3rd Week3 #Design by breakfast</p>
    </footer>
    
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'index',
  components: {
    Header
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
