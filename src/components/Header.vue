<template>
  <div>
    <div class="header">
      <div class="logo_bus">
        <img src="../assets/logo_header.png" alt="logo_bus">
      </div>
      <div class="title">
        <p>機智公車族+</p>
        <p>全台公車動態時刻查詢應用服務</p>
      </div>
      <div class="menu">
        <ul></ul>
          <li><a href="#/findBus/">公車快找</a></li>
          <li>查詢站牌</li>
          <li>搜尋路線</li>
        
        </ul>
      </div>
      <img src="../assets/logo_header_footer.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #fff;
    text-decoration: none;
  }
  .header {
    height: 80px;
    border-radius: 0 0 0 40px;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: linear-gradient(45deg, #42307D 0%, #7F56D9 100%);
    text-align: left;
    /* display: flex; */
    
  }
  .header>div{
    margin-top: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .logo_bus {
    margin-left: 1%;
    margin-right: 1%;
    
  }
  .title {
    color: #fff;
  }

  .title {
    vertical-align: middle;
  }
  .title p:nth-child(1) {
    font-size: 24px;
  }

  .title p:nth-child(2) {
    font-size: 12px;
    margin-top: 5px;
  }
  .menu {
    position: absolute;
    right: 0;
    top: 20%;
    width: 28%;
  }

  .menu li{
    display: inline-block;
    color:  #fff;
    font-size: 18px;
    margin-right: 9%;
  }

  .header img:nth-child(4) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
