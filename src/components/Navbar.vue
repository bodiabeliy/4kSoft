<template>
          <nav class="top-section__menu">
         <el-row style="display:flex">
          <el-col class="top-section__logo" :span="9" :offset="2">
            <div class="grid-content bg-purple">
              <a href="#">
                  <img class="top-section__logo-img" src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Flogo.svg?alt=media&token=d0ca01db-3917-4886-9ee1-43949bd0e606" alt="">
              </a>
            </div>
          </el-col>
           <el-col :span="18" :offset="0">
            <div class="grid-content bg-purple">
              <ul class="top-section__nav-menu">
                <li><a class="top-section__nav-item" href="#">Home</a></li>
                <li><a class="top-section__nav-item" href="#">Trips</a></li>
                <li><a class="top-section__nav-item" href="#">About</a></li>
                <li><a class="top-section__nav-item" href="#">Support</a></li>
                <li><a class="top-section__nav-item" href="#">Travel</a></li>
              </ul>
            </div>
          </el-col>
           <el-col :span="12" :offset="2">
            <div class="grid-content bg-purple">
              <el-button class="top-section__btn" round>Sign up</el-button>
            </div>
          </el-col>
        </el-row>
       </nav>
</template>

<script>

</script>

<style>
.top-section__nav-menu {
  display: flex;
  margin-top: 55px;
  
}
.top-section__btn {
  background: #1F4AA8 !important;
  border: none !important;
  border-radius: 39px !important;
  color: white !important;
  margin-top: 40px !important;
}

.top-section__btn--calculate {
  max-width: 235px;
  margin: 0 auto !important;
  width: 100%;
  padding: 20px 0 !important;
}
.top-section__logo-img {
    margin-top: 45px !important;
}
.top-section__title,
.top-section__subtitle {
  text-align: center;
  margin-bottom: 70px;
}
.top-section__title {
  font-size: 72px;
  line-height: 88px;
  margin-top: 129px;
}

.top-section__subtitle {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.055em;
}


.slide-section__title {
  font-size: 32px;
  line-height: 39px;
  background: #222831;
  margin-top: 90px;
}
@media (max-width: 800px) {
    .top-section__nav-menu,
    .top-section__btn {
      display: none !important;
  }
  .top-section__title {
      font-size: 32px;
  }
}
@media (max-width: 576px) {
 .top-section__logo {
   margin-left: 30% !important;
 }
 .top-section__title {
   line-height: 40px;
 }
}
</style>