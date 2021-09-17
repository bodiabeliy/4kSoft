<template>
 <div class="data-picker__container">
    <div class="data-picker__checkBtn">
        <el-radio-group v-model="radio">
        <el-radio class="data-picker__checkBtn--radio-item" :label="3">One way</el-radio>
        <el-radio class="data-picker__checkBtn--radio-item" :label="6">Return</el-radio>
        <el-radio class="data-picker__checkBtn--radio-item" :label="9">Multy-city</el-radio>
    </el-radio-group>
    </div>
   <div class="data-picker__wrapper">
        <div class="data-picker__date">
        <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        >
        </el-date-picker>
    </div>
  <div class="data-picker__swapBtn">
    <img src="https://firebasestorage.googleapis.com/v0/b/uploading-images-cf9c0.appspot.com/o/images%2Fchange-btn.svg?alt=media&token=4c726434-7c99-4d42-bd58-48b4d94de319" alt="">
  </div>
  <div class="data-picker__date">
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</div>
      <el-button  class="top-section__btn top-section__btn--calculate">Search</el-button>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: 3,
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
  };
</script>

<style>
.data-picker__container {
    z-index: 12;
    max-width: 1240px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 5px;
    background: #fff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
}
.data-picker__checkBtn {
    padding-top: 33px;
    margin: 0 auto;
}
.data-picker__swapBtn {
  margin: 0 8.5px;
}
.el-radio__inner {
  color: black !important;
  border: 3px solid #1F4AA8 !important;
}
.el-radio__inner::after {
  color: black !important;
  position: absolute;
  width: 12px !important;
  height: 12px !important;
  background: radial-gradient(circle, rgba(31,74,168,1) 50%, rgba(255,255,255,1) 50%) !important;
}
.data-picker__wrapper {
    display: flex;
    justify-content: center;
    margin: 31px;
}
@media (max-width: 800px) {
  .data-picker__swapBtn {
    margin:  8.5px 0; 
    display: flex;
    justify-content: center;
  }
    .data-picker__container {
       width: 90%;
       margin: 0 auto;
    }
    .el-date-editor.el-input {
    width: 100% !important;
  }
    .data-picker__wrapper {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
}
@media (max-width: 576px) {
 
  .data-picker__swapBtn {
    margin:  8.5px 0; 
    display: flex;
    justify-content: center;
  }
  .data-picker__checkBtn--radio-item {
    margin-top: 15px;
  }

  .el-radio-group {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }
  .el-date-editor.el-input {
    width: 90% !important;
  }
}
</style>