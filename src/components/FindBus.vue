<template>
  <div>
    <div class="google-map" id="map"></div>
    <Header></Header>
    <div class="card">
      <div>
        <div>
          <select name="" id="">
            <option v-for="(cityItem) in city" :key="cityItem.key" :value="cityItem.name">{{cityItem.name}}</option>
          </select>
        </div>
        <div class="quickKey">
          <button v-for="(buttonItem) in button" :key="buttonItem.key">
            {{buttonItem.text}}
          </button>
        </div>
      </div>
      <div>
        <input type="text" placeholder="請輸入公車路線 / 起迄站名">
        <img src="../assets/icon_search.png" alt="">
      </div>
      <div class="bus_line">
        <div>
          <span>紅</span>
        </div>
      </div>
      <div>
        <input type="checkbox" name="" value="">
        <label for=""><img src="" alt=""></label>
      </div>
      <div class="search_history">
        <p>歷史搜尋</p>
        <div>
          <div><img src="../assets/icon_time.png" alt=""></div>
          <div>
            <p>8501</p>
            <p>義大世界 - 高鐵左營站</p>
          </div>
          <div>
            <span>高雄</span><img src="../assets/icon_arrow_right.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>#The F2E 3rd Week3 #Design by breakfast</p>
    </footer>
    
  </div>
</template>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlyYiLlDWqEDg68C5RtsvNUMbTzR4Zp8"></script>
<script>
import Header from './Header.vue'
export default {
  name: 'FindBus',
  components: {
    Header
  },
  data () {
    return {
      map: null,
      city:[
        {name: '全部縣市',key: 'citykey0'},
        {name: '新北市',key: 'citykey1'},
        {name: '臺北市',key: 'citykey2'},
        {name: '桃園市',key: 'citykey3'},
        {name: '基隆市',key: 'citykey4'},
        {name: '新竹市',key: 'citykey5'},
        {name: '宜蘭縣',key: 'citykey6'},
        {name: '新竹縣',key: 'citykey7'},
        {name: '臺中市',key: 'citykey8'},
        {name: '苗栗縣',key: 'citykey9'},
        {name: '彰化縣',key: 'citykey10'},
        {name: '南投縣',key: 'citykey11'},
        {name: '雲林縣',key: 'citykey12'},
        {name: '臺南市',key: 'citykey13'},
        {name: '高雄市',key: 'citykey14'},
        {name: '嘉義市',key: 'citykey15'},
        {name: '嘉義縣',key: 'citykey16'},
        {name: '屏東縣',key: 'citykey17'},
        {name: '澎湖縣',key: 'citykey18'},
        {name: '臺東縣',key: 'citykey19'},
        {name: '花蓮縣',key: 'citykey20'}
      ]
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    getLocation (){
      var map = new google.maps.Map(document.getElementById("map"), {
      });  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(pos)
          var marker = new google.maps.Marker({
            position: pos,
            icon: 'https://i.imgur.com/BkDNe30.png',
            map: map,
          });
          map.setZoom(15);
          map.setCenter(pos);
          

          const infowindow = new google.maps.InfoWindow({
            // 設定想要顯示的內容
            content: '<div id="content"><p class="busStationInfo">龍江路口</p></div>',
            // 設定訊息視窗最大寬度
            maxWidth: 200
          });
            // 指定在哪個地圖和地標上開啟訊息視窗
          infowindow.open(map, marker);

        });
      } else {
        alert("未允許或遭遇錯誤！");
      }
    },
    // 建立地圖
    initMap() {
      
      var latlng = { lat: 25.05989, lng: 121.54000 };

      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      var map = new google.maps.Map(document.getElementById("map"), {
        // 設定地圖的中心點經緯度位置
        center: latlng,
        // 設定地圖縮放比例 0-20
        zoom: 8,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false
      });
      var marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google-map {
  width: 100%;
  height: 100vh;
}
.card {
  background-color: #fff;
  border-radius: 0 50px 0 0;
  position: absolute;
  top: 19%;
  left: 0;
  width: 24%;
  text-align: left;
  padding: 26px;
}
</style>
