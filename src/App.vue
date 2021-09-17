<template>
  <div id="app">
   <div class="top-section">
     <div class="top-section__wrapper">
       <Navbar />
          <div class="top-section__description">
            <h1 class="top-section__title">It Matters Who You <br> Travel With</h1>
            <h3 class="top-section__subtitle">We want you to feel confident in the travel experience you will have with us.</h3>
          </div>
          <TravelCalulator />
     </div>
   </div>
   <div class="slide-section">
    <Photos />
   </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Photos from '@/components/Photos.vue'
import TravelCalulator from '@/components/TravelCalculation.vue'
export default {

  name: 'App',
  components: {
    Navbar,
    Photos,
    TravelCalulator
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
body {
  margin: 0;
    font-family: 'Montserrat', sans-serif;

}
ul>li {
  list-style: none;
}
a.top-section__nav-item {
    color: white;
    text-decoration: none;
    font-weight: normal;
    margin: 55px 12px 0 12px;
}
a.top-section__nav-item:hover {
  font-weight: bold;
}
#app {
  background: #222831;
  font-size: 14px;
  color: white;

}

.top-section {
  height: 100vh;
  background-image: url('../src/assets/images/top.png');
  background-repeat: no-repeat;
  background-position: center center;      
  background-repeat: no-repeat;      
  background-attachment: fixed;      
  background-size: cover;      

}
.top-section__wrapper {
  height: 100%;
  background: rgba(0,0,0, 0.45);
}
.slide-section {
  padding-top: 140px;
}
</style>
