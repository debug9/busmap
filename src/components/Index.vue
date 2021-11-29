<template>
  <div class="index_body">
    <div class="google-map" id="map"></div>
    <Header></Header>
    <div>
      <ul>
        <li v-for="(menuItem) in menu" :key="menuItem.key" :style="{backgroundImage: 'url(' + menuItem.img + ')'}">
          <p>{{menuItem.title}}</p>
          <p>{{menuItem.description}}</p>
        </li>
      </ul>
    </div>
    <div class="gps" :class="{hideGPS:hideGPS}">
      <p>開啟裝置定位功能，以便為您提供更好的服務。</p>
      <p>我們將用在提供您所在位置附近的交通等資訊。</p>
      <button @click="getLocation">開啟定位功能</button>
    </div>
    <div class="card">
      <p>最近站牌</p>
      <div>
        <div class="satName">
          <p>捷運美麗島站</p><span>北行</span>
        </div>
        <div>
          <p>10秒後更新</p><img src="../assets/icon_refresh.png" alt="">
        </div>

        <div class="busInfo">
          <div class="arrivalTime">3<span>分</span></div>
          <div class="busLine">
            <p>9117</p>
            <p>開往 小灣</p>
          </div>
          <div>
            <img src="../assets/icon_arrow_right.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZlyYiLlDWqEDg68C5RtsvNUMbTzR4Zp8"></script>
<script>
import Header from './Header.vue'
export default {
  name: 'Index',
  components: {
    Header
  },
  data () {
    return {
      menu: [
        {title: '公車快找', description: '直接輸入路線名稱獲得資訊！', img: require('../assets/search.png'), key: 'menuItem1'},
        {title: '查詢站牌', description: '附近站牌 / 公車動態及路線圖', img: require('../assets/bus.png'), key: 'menuItem2'},
        {title: '推薦公車路線', description: '依起點及目的地搜尋路線', img: require('../assets/map.png'), key: 'menuItem3'}
      ],
      map: null,
      hideGPS: false
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    getLocation (){
      this.hideGPS = true

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
.index_body {
  height: 100vh;
  /* background-image: url('../assets/bg_index.jpg'); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0% 70%;
}

ul {
  position: absolute;
  right: 0;
  top: 20%;
  width: 28%;
  margin-right: 1%;
}
li{
  text-align: left;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 15px;
  position: relative;
  /* padding-right: 180px; */
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 30%;
}
li p:nth-child(1){
  color: #0D081A;
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Noto Sans TC';
  font-weight: 700;
}
li p:last-child{
  font-size: 14px;
  color: #6F7585;
}
.gps {
  width: 23.5%;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  right: 0;
  bottom: -30%;
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 14px;
  color: #0D081A;
  text-align: center;
  margin-right: 1%;
  animation: showGPS 3s forwards;;
  -webkit-animation: showGPS 3s forwards;; /* Safari 与 Chrome */
}
.gps p:first-child{
  margin-bottom: 10px;
  font-size: 20px;
  text-align: left;
  line-height: 30px;
}

.gps p:nth-child(2){
  color: #37206D;
  font-weight: normal;
  text-align: left;
  margin-bottom: 20px;
}

.gps button {
  margin: 0 auto;
  padding: 13px 10px;
  background-color: #fff;
  border-radius: 99px;
  border: 1px solid #53389E;
  color: #53389E;
  width: 100%;
}

.hideGPS {
  animation: hideGPS 3s forwards;;
  -webkit-animation: hideGPS 3s forwards;; /* Safari 与 Chrome */
}

#content {
  background-color: #37206D;
  color: #fff;
}

.busStationInfo {
  background-color: #37206D;
  color: #fff;
}

@keyframes hideGPS
{
    from {bottom: 0%;}
    to {bottom: -30%;}
}
 
@-webkit-keyframes hideGPS /* Safari 与 Chrome */
{
    from {bottom: 0%;}
    to {bottom: -30%;}
}


@keyframes showGPS
{
    from {bottom: -30%;}
    to {bottom: 0%;}
}
 
@-webkit-keyframes showGPS /* Safari 与 Chrome */
{
    from {bottom: -30%;}
    to {bottom: 0%;}
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

.card >p:nth-child(1){
  color: #6F7585;
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}

.satName {
  display: inline-block;
}

.satName p {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: bold;
  line-height: 30px;
  font-size: 16px;
  color: #36393F;
  display: inline-block;
  margin-right: 6px;
  vertical-align: middle;
  
}

.satName span {
  color: #fff;
  background: #A6AAB4;
  border-radius: 12px;
  font-size: 12px;
  padding: 3px 9px;
}

.satName + div {
  display: inline-block;
  float: right;
  position: relative;
  top: 5px;
  text-align: right;
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 170%;
}

.satName + div p {
  display: inline-block;
  vertical-align: bottom;
  margin-right: 4px;
}

.satName + div img{
  width: 16%;
  position: relative;
  top: 2px
}

.busInfo {
  width: 100%;
  margin-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #E0E0E0;
}

.busInfo div{
  vertical-align: middle;
  display: inline-block;
}

.arrivalTime {
  width: 17%;
  text-align: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #37206D;
  margin-right: 7%;
}
.arrivalTime span {
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color:#6F7585;
  position: relative;
  top: -2px;
  left: 5px;
}

.busLine {
  font-family: Noto Sans TC;
  font-style: normal;
  width: 63.5%;
}

.busLine p:nth-child(1){
  font-weight: bold;
  font-size: 16px;
  color: #0D081A;
  margin-bottom: 8px;
}

.busLine p:nth-child(2){
  font-weight: 500;
  font-size: 12px;
  color: #6F7585;
}
</style>
