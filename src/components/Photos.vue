<template>
  <div class="image__container">
           <h2 class="slide-section__title">Top Most Popular Destinations</h2>
    <div class="image__container-list">
        <div class="image__item--one"  
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
            >
            <img  @click="dialogVisible = true" class="image__item" src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-1.png?alt=media&token=9e17a1ac-132a-4e21-bfdf-daf5c70a66a9" alt="">
        <el-dialog
                :visible.sync="dialogVisible"
                width="100%"
                :before-close="handleClose"
                >
            <el-carousel indicator-position="outside">
                    <el-carousel-item 
                        v-for="photo in photos" 
                        :key="photo"
                        >
                        <span>{{photo.title}}</span>
                        <img class="slider-image" :src="photo.src" alt="">
                    </el-carousel-item>
            </el-carousel>
        </el-dialog>
        </div>
        <div class="image__item--two"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
        >
            <img 
                @click="dialogVisible = true" 
                class="image__item" 
                src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-2.png?alt=media&token=09fefa9a-5359-4c9b-9b0a-8ef474ed3c8c" alt="">
             <el-dialog
            :visible.sync="dialogVisible"
            width="100%"
            :before-close="handleClose">
            <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="photo in photos" :key="photo">
                        <span>{{photo.title}}</span>
                        <img class="slider-image" :src="photo.src" alt="">
                    </el-carousel-item>
            </el-carousel>
        </el-dialog>
        </div>
        <div class="image__item--three"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
        >
            <img 
                @click="dialogVisible = true" 
                class="image__item" 
                src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-3.png?alt=media&token=48047778-2c7e-4f63-8b08-49bdc212cf3b" alt="">
             <el-dialog
                :visible.sync="dialogVisible"
                width="100%"
                :before-close="handleClose">
            <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="photo in photos" :key="photo">
                        <span>{{photo.title}}</span>
                        <img class="slider-image" :src="photo.src" alt="">
                    </el-carousel-item>
            </el-carousel>
        </el-dialog>
        </div>
        <div class="image__item--four"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
        >
            <img @click="dialogVisible = true" class="image__item" src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-4.png?alt=media&token=a909b20a-7113-441e-a2e1-86420d11c4f2" alt="">
             <el-dialog
                :visible.sync="dialogVisible"
                width="100%"
                :before-close="handleClose"
                >
            <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="photo in photos" :key="photo">
                        <span>{{photo.title}}</span>
                        <img class="slider-image" :src="photo.src" alt="">
                    </el-carousel-item>
            </el-carousel>
        </el-dialog>
        </div>
        <div class="image__item--five"
            @click="openFullScreen1"
            v-loading.fullscreen.lock="fullscreenLoading"
        >
            <img @click="dialogVisible = true" class="image__item" src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-5.png?alt=media&token=c6ac673c-ffaa-428f-8086-1ed71627284f" alt="">
             <el-dialog
                :visible.sync="dialogVisible"
                width="100%"
                :before-close="handleClose"
                >
            <el-carousel indicator-position="outside">
                    <el-carousel-item  v-for="photo in photos" :key="photo">
                        <span class="slider-image__description">{{photo.title}}</span>
                        <img class="slider-image" :src="photo.src" alt="">
                    </el-carousel-item>
            </el-carousel>
        </el-dialog>
        
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        dialogVisible: false,
        fullscreenLoading: false,
        photos: [
            {uid:1, src: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-1.png?alt=media&token=9e17a1ac-132a-4e21-bfdf-daf5c70a66a9', title:'Mountains'},
            {uid:2, src: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-2.png?alt=media&token=09fefa9a-5359-4c9b-9b0a-8ef474ed3c8c', title:'Forest'},
            {uid:3, src: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-3.png?alt=media&token=48047778-2c7e-4f63-8b08-49bdc212cf3b', title:'Desert landscape'},
            {uid:4, src: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-4.png?alt=media&token=a909b20a-7113-441e-a2e1-86420d11c4f2', title:'Airball'},
            {uid:5, src: 'https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fslide-5.png?alt=media&token=c6ac673c-ffaa-428f-8086-1ed71627284f', title:'Plantation'}
        ]
    }),
     methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
    }
}
</script>

<style>

.image__container {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
}
.image__container-list {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}
.image__item {
    border-radius: 16px;
}
.image__item:is(.el-carousel__item.is-animating) {
    display: none !important;
}
.image__item--one { grid-area: 1 / 1 / 3 / 3; }
.image__item--two { grid-area: 3 / 1 / 5 / 2; }
.image__item--three { grid-area: 3 / 2 / 5 / 3; }
.image__item--four { grid-area: 1 / 3 / 5 / 4; }
.image__item--five { grid-area: 1 / 4 / 5 / 5; }

.slider {
    width: 100% !important;
}
.slider-image {
    width: 65%;
    margin-left: 15%;
   display: flex !important;
}
.slider-image__description {
    margin-left: 15%;
    color: white;

}
  .el-dialog__headerbtn .el-dialog__close:hover {
        padding: 5px !important;
        color: #fff !important;
        border: 1.5px solid #FFFFFF !important;
        border-radius: 5px !important;
    }
 .el-dialog, .el-pager li{
      background: transparent !important;
    }
@media (max-width: 800px) {
    .image__container-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .image__item {
        justify-content: center;
        display: flex;
        width: 90%;
        margin: 0 auto;
        margin-top: 10px
    }
    .slide-section__title {
        text-align: center;
    }
}
@media (max-width: 576px) {
    .image__container-list {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    .slide-section__title {
        text-align: left;
        padding-left: 15px;
    }
    .image__item {
        justify-content: center;
        display: flex;
        width: 90%;
        margin: 0 auto;
        margin-top: 10px
    }
    .slider-image {
        width: 100%;
        margin-left: 0;
    }
    .slider-image__description {
    margin-left: 0;
    }
}

</style>